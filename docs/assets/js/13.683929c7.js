(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{619:function(e,t,s){e.exports=s.p+"assets/img/producer_send_request.c0a8a37a.png"},620:function(e,t,s){e.exports=s.p+"assets/img/consumer_reply.7fdb9556.png"},649:function(e,t,s){"use strict";s.r(t);var r=s(6),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"_1-使用场景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用场景"}},[e._v("#")]),e._v(" 1 使用场景")]),e._v(" "),r("p",[e._v("随着服务规模的扩大，单机服务无法满足性能和容量的要求，此时需要将服务拆分为更小粒度的服务或者部署多个服务实例构成集群来提供服务。在分布式场景下，RPC是最常用的联机调用的方式。")]),e._v(" "),r("p",[e._v("在构建分布式应用时，有些领域，例如金融服务领域，常常使用消息队列来构建服务总线，实现联机调用的目的。消息队列的主要场景是解耦、削峰填谷，在联机调用的场景下，需要将服务的调用抽象成基于消息的交互，并增强同步调用的这种交互逻辑。为了更好地支持消息队列在联机调用场景下的应用，rocketmq-4.6.0推出了“Request-Reply”特性来支持RPC调用。")]),e._v(" "),r("h2",{attrs:{id:"_2-设计思路"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-设计思路"}},[e._v("#")]),e._v(" 2 设计思路")]),e._v(" "),r("p",[e._v("在rocketmq中，整个同步调用主要包括两个过程：")]),e._v(" "),r("p",[e._v("（1）请求方生成消息，发送给响应方，并等待响应方回包；")]),e._v(" "),r("p",[e._v("（2）响应方收到请求消息后，消费这条消息，并发出一条响应消息给请求方。")]),e._v(" "),r("p",[e._v("整个过程实质上是两个消息收发过程的组合。所以这里最关键的问题是如何将异步的消息收发过程构建成一个同步的过程。其中主要有两个问题需要解决：")]),e._v(" "),r("h3",{attrs:{id:"_2-1-请求方如何同步等待回包"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-请求方如何同步等待回包"}},[e._v("#")]),e._v(" 2.1 请求方如何同步等待回包")]),e._v(" "),r("p",[e._v("这个问题的解决方案中，一个关键的数据结构是RequestResponseFuture。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("public class RequestResponseFuture {\n    private final String correlationId;\n    private final RequestCallback requestCallback;\n    private final long beginTimestamp = System.currentTimeMillis();\n    private final Message requestMsg = null;\n    private long timeoutMillis;\n    private CountDownLatch countDownLatch = new CountDownLatch(1);\n    private volatile Message responseMsg = null;\n    private volatile boolean sendRequestOk = true;\n    private volatile Throwable cause = null;\n}\n")])])]),r("p",[e._v("RequestResponseFuture中，利用correlationId来标识一个请求。如下图所示，Producer发送request时创建一个RequestResponseFuture，以correlationId为key，RequestResponseFuture为value存入map，同时请求中带上RequestResponseFuture中的correlationId，收到回包后根据correlationId拿到对应的RequestResponseFuture，并设置回包内容。\n"),r("img",{attrs:{src:s(619),alt:""}})]),e._v(" "),r("h3",{attrs:{id:"_2-2-consumer消费消息后-如何准确回包"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-consumer消费消息后-如何准确回包"}},[e._v("#")]),e._v(" 2.2 consumer消费消息后，如何准确回包")]),e._v(" "),r("p",[e._v("（1）producer在发送消息的时候，会给每条消息生成唯一的标识符，同时还带上了producer的clientId。当consumer收到并消费消息后，从消息中取出消息的标识符correlationId和producer的标识符clientId，放入响应消息，用来确定此响应消息是哪条请求消息的回包，以及此响应消息应该发给哪个producer。同时响应消息中设置了消息的类型以及响应消息的topic，然后consumer将消息发给broker，如下图所示。\n"),r("img",{attrs:{src:s(620),alt:""}})]),e._v(" "),r("p",[e._v("（2）broker收到响应消息后，需要将消息发回给指定的producer。Broker如何知道发回给哪个producer？因为消息中包含了producer的标识符clientId，在ProducerManager中，维护了标识符和channel信息的对应关系，通过这个对应关系，就能把回包发给对应的producer。")]),e._v(" "),r("p",[e._v("响应消息发送和一般的消息发送流程区别在于，响应消息不需要producer拉取，而是由broker直接推给producer。同时选择broker的策略也有变化：请求消息从哪个broker发过来，响应消息也发到对应的broker上。")]),e._v(" "),r("p",[e._v("Producer收到响应消息后，根据消息中的唯一标识符，从RequestResponseFuture的map中找到对应的RequestResponseFuture结构，设置响应消息，同时计数器减一，解除等待状态，使请求方收到响应消息。")]),e._v(" "),r("h2",{attrs:{id:"_3-使用方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-使用方法"}},[e._v("#")]),e._v(" 3 使用方法")]),e._v(" "),r("p",[e._v("同步调用的示例在example文件夹的rpc目录下。")]),e._v(" "),r("h3",{attrs:{id:"_3-1-producer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-producer"}},[e._v("#")]),e._v(" 3.1 Producer")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('Message msg = new Message(topic,\n                "",\n                "Hello world".getBytes(RemotingHelper.DEFAULT_CHARSET));\n\n            long begin = System.currentTimeMillis();\n            Message retMsg = producer.request(msg, ttl);\n            long cost = System.currentTimeMillis() - begin;\n            System.out.printf("request to <%s> cost: %d replyMessage: %s %n", topic, cost, retMsg);\n')])])]),r("p",[e._v("调用接口替换为request即可。")]),e._v(" "),r("h3",{attrs:{id:"_3-2-consumer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-consumer"}},[e._v("#")]),e._v(" 3.2 Consumer")]),e._v(" "),r("p",[e._v("需要启动一个producer，同时在覆写consumeMessage方法的时候，自定义响应消息并发送。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('            @Override\n            public ConsumeConcurrentlyStatus consumeMessage(List<MessageExt> msgs, ConsumeConcurrentlyContext context) {\n                System.out.printf("%s Receive New Messages: %s %n", Thread.currentThread().getName(), msgs);\n                for (MessageExt msg : msgs) {\n                    try {\n                        System.out.printf("handle message: %s", msg.toString());\n                        String replyTo = MessageUtil.getReplyToClient(msg);\n                        byte[] replyContent = "reply message contents.".getBytes();\n                        // create reply message with given util, do not create reply message by yourself\n                        Message replyMessage = MessageUtil.createReplyMessage(msg, replyContent);\n\n                        // send reply message with producer\n                        SendResult replyResult = replyProducer.send(replyMessage, 3000);\n                        System.out.printf("reply to %s , %s %n", replyTo, replyResult.toString());\n                    } catch (MQClientException | RemotingException | MQBrokerException | InterruptedException e) {\n                        e.printStackTrace();\n                    }\n                }\n                return ConsumeConcurrentlyStatus.CONSUME_SUCCESS;\n            }\n')])])]),r("h2",{attrs:{id:"_4-接口参数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-接口参数"}},[e._v("#")]),e._v(" 4 接口参数")]),e._v(" "),r("p",[e._v("4.1 public Message request(Message msg,long timeout)")]),e._v(" "),r("p",[e._v("msg：待发送的消息")]),e._v(" "),r("p",[e._v("timeout：同步调用超时时间")]),e._v(" "),r("p",[e._v("4.2 public void request(Message msg, final RequestCallback requestCallback, long timeout)")]),e._v(" "),r("p",[e._v("msg：待发送的消息")]),e._v(" "),r("p",[e._v("requestCallback：回调函数")]),e._v(" "),r("p",[e._v("timeout：同步调用超时时间")]),e._v(" "),r("p",[e._v("4.3 public Message request(final Message msg, final MessageQueueSelector selector, final Object arg,final long timeout)")]),e._v(" "),r("p",[e._v("msg：待发送的消息")]),e._v(" "),r("p",[e._v("selector：消息队列选择器")]),e._v(" "),r("p",[e._v("arg：消息队列选择器需要的参数")]),e._v(" "),r("p",[e._v("timeout：同步调用超时时间")]),e._v(" "),r("p",[e._v("4.4 public void request(final Message msg, final MessageQueueSelector selector, final Object arg,final RequestCallback requestCallback, final long timeout)")]),e._v(" "),r("p",[e._v("msg：待发送的消息")]),e._v(" "),r("p",[e._v("selector：消息队列选择器")]),e._v(" "),r("p",[e._v("arg：消息队列选择器需要的参数")]),e._v(" "),r("p",[e._v("requestCallback：回调函数")]),e._v(" "),r("p",[e._v("timeout：同步调用超时时间")]),e._v(" "),r("p",[e._v("4.5\tpublic Message request(final Message msg, final MessageQueue mq, final long timeout)")]),e._v(" "),r("p",[e._v("msg：待发送的消息")]),e._v(" "),r("p",[e._v("mq：目标消息队列")]),e._v(" "),r("p",[e._v("timeout：同步调用超时时间")]),e._v(" "),r("p",[e._v("4.6\tpublic void request(final Message msg, final MessageQueue mq, final RequestCallback requestCallback, long timeout)")]),e._v(" "),r("p",[e._v("msg：待发送的消息")]),e._v(" "),r("p",[e._v("mq：目标消息队列")]),e._v(" "),r("p",[e._v("requestCallback：回调函数")]),e._v(" "),r("p",[e._v("timeout：同步调用超时时间")])])}),[],!1,null,null,null);t.default=a.exports}}]);