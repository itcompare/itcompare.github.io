---
title: RocketMQ收获之思考
date: 2022-08-15
author: fanghuabao
categories:
- 消息中间件

tags:
- RocketMQ
---

## 生产者
### 发送消息时，message body这块，使用者可以
```java
                Message msg = new Message(TOPIC /* Topic */,
                    TAG /* Tag */,
                    ("Hello RocketMQ " + i).getBytes(RemotingHelper.DEFAULT_CHARSET) /* Message body */
                );
```
