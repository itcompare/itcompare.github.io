---
title: RocketMQ源码分析之生产者发送消息
date: 2022-08-15
author: fanghuabao
categories:
- 消息中间件

tags:
- RocketMQ
- 源码分析
---

## 目标
相关概念
- 生产者组
- 事务消息

生产者发送消息有多种方式，主要包括如下几种
- 同步发送
- 异步发送
- 顺序发送
- 延迟发送

## 发送普通消息(DefaultMQProducer)
```java
// 第一步 构造生产者
DefaultMQProducer producer = new DefaultMQProducer(PRODUCER_GROUP);
producer.setNamesrvAddr(DEFAULT_NAMESRVADDR);

// 第二步 启动生产者
producer.start();

// 第三步 构造消息
Message msg = new Message(TOPIC,TAG,("Hello RocketMQ " + i).getBytes(RemotingHelper.DEFAULT_CHARSET));

// 第四步 发送消息
SendResult sendResult = producer.send(msg);
```
以上为普通消息的发送流程，分为四步，下面我们逐步分析

### 第一步 构造生产者
```java
// 第一步 构造生产者
DefaultMQProducer producer = new DefaultMQProducer(PRODUCER_GROUP);
producer.setNamesrvAddr(DEFAULT_NAMESRVADDR);

public DefaultMQProducer(final String namespace, final String producerGroup, RPCHook rpcHook) {
    this.namespace = namespace;
    this.producerGroup = producerGroup;
    defaultMQProducerImpl = new DefaultMQProducerImpl(this, rpcHook);
}
```

**namespace**: 用于隔离，比如区分不同环境等。  
**producerGroup**: 区分不同生产者的角色
**defaultMQProducerImpl**: 包装DefaultMQProducer类的所有方法实现。当前看这样做的好处，使当前类看起来没那么臃肿，其他好处待摸索(TODO)。  

#### DefaultMQProducerImpl初始化
**defaultMQProducer**:   
**rpcHook**： ???
**defaultAsyncSenderExecutor**：
    - 阻塞队列为LinkedBlockingQueue，长度为50000  
    - 线程名：前缀为AsyncSenderExecutor_
    

### 第二步 启动生产者

```java
// 第二步 启动生产者
producer.start();

```
**defaultMQProducerImpl.start()**:   
**traceDispatcher.start()**: 消息轨迹用到，功能待确认(TODO)  

#### DefaultMQProducerImpl.start()流程

**服务状态**
```java
public enum ServiceState {
    /**
     * Service just created,not start
     */
    CREATE_JUST,
    /**
     * Service Running
     */
    RUNNING,
    /**
     * Service shutdown
     */
    SHUTDOWN_ALREADY,
    /**
     * Service Start failure
     */
    START_FAILED;
}
```

1. this.checkConfig() 
2. this.defaultMQProducer.changeInstanceNameToPID()
3. MQClientManager.getInstance().getOrCreateMQClientInstance()  
4. mQClientFactory.registerProducer
5. MQClientInstance.start

### 第三步 构造消息

### 第四步 发送消息


- 数据压缩  

### DefaultMQProducerImpl
同步发送时，默认超时重试2次。
```java
            int timesTotal = communicationMode == CommunicationMode.SYNC ? 1 + this.defaultMQProducer.getRetryTimesWhenSendFailed() : 1;
```

### selectOneMessageQueue算法
存在多个broker时会均匀分布。
TopicPublishInfo中
```java
    public MessageQueue selectOneMessageQueue(final String lastBrokerName) {
        if (lastBrokerName == null) {
            return selectOneMessageQueue();
        } else {
            for (int i = 0; i < this.messageQueueList.size(); i++) {
                int index = this.sendWhichQueue.incrementAndGet();
                int pos = Math.abs(index) % this.messageQueueList.size();
                if (pos < 0)
                    pos = 0;
                MessageQueue mq = this.messageQueueList.get(pos);
                if (!mq.getBrokerName().equals(lastBrokerName)) {
                    return mq;
                }
            }
            return selectOneMessageQueue();
        }
    }

    public MessageQueue selectOneMessageQueue() {
        int index = this.sendWhichQueue.incrementAndGet();
        int pos = Math.abs(index) % this.messageQueueList.size();
        if (pos < 0)
            pos = 0;
        return this.messageQueueList.get(pos);
    }
```


## 发送事务消息

## broker容错机制
可参考[消息重试及Broker故障延迟机制](https://blog.csdn.net/hosaos/article/details/99624467)
## broker剔除机制
## broker故障延迟机制

## 相关参数
```java
private int sendMsgTimeout = 3000;
private int maxMessageSize = 1024 * 1024 * 4; // 4M
 private int retryTimesWhenSendFailed = 2;
```

## 问题列表
1. namespace、instanceName作用是什么？
2. traceDispatcher作用是什么？
3. 下面9个topic不允许生产者发送。
```java
    public static final String AUTO_CREATE_TOPIC_KEY_TOPIC = "TBW102"; // Will be created at broker when isAutoCreateTopicEnable
    public static final String RMQ_SYS_SCHEDULE_TOPIC = "SCHEDULE_TOPIC_XXXX";
    public static final String RMQ_SYS_BENCHMARK_TOPIC = "BenchmarkTest";
    public static final String RMQ_SYS_TRANS_HALF_TOPIC = "RMQ_SYS_TRANS_HALF_TOPIC";
    public static final String RMQ_SYS_TRACE_TOPIC = "RMQ_SYS_TRACE_TOPIC";
    public static final String RMQ_SYS_TRANS_OP_HALF_TOPIC = "RMQ_SYS_TRANS_OP_HALF_TOPIC";
    public static final String RMQ_SYS_TRANS_CHECK_MAX_TIME_TOPIC = "TRANS_CHECK_MAX_TIME_TOPIC";
    public static final String RMQ_SYS_SELF_TEST_TOPIC = "SELF_TEST_TOPIC";
    public static final String RMQ_SYS_OFFSET_MOVED_EVENT = "OFFSET_MOVED_EVENT";
```
4. MQFaultStrategy
