(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{638:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"类简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类简介"}},[t._v("#")]),t._v(" 类简介")]),t._v(" "),a("ol",[a("li",[a("p",[a("code",[t._v("DefaultMQPullConsumer extends ClientConfig implements MQPullConsumer")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("DefaultMQPullConsumer")]),t._v("主动的从Broker拉取消息，主动权由应用控制，可以实现批量的消费消息。Pull方式取消息的过程需要用户自己写,首先通过打算消费的Topic拿到MessageQueue的集合,遍历MessageQueue集合,然后针对每个MessageQueue批量取消息,也可以自定义与控制offset位置。")])]),t._v(" "),a("li",[a("p",[t._v("优势:consumer可以按需消费,不用担心自己处理能力,而broker堆积消息也会相对简单,无需记录每一个要发送消息的状态,只需要维护所有消息的队列和偏移量就可以了。所以对于慢消费,消息量有限且到来的速度不均匀的情况,pull模式比较合适消息延迟与忙等。")])]),t._v(" "),a("li",[a("p",[t._v("缺点:由于主动权在消费方,消费方无法及时获取最新的消息。比较适合不及时批处理场景。")])])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("\n \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashMap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("apache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rocketmq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("consumer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DefaultMQPullConsumer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("apache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rocketmq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("consumer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PullResult")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("apache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rocketmq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exception"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MQClientException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("apache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rocketmq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("common"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MessageExt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("apache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rocketmq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("common"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MessageQueue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MQPullConsumer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n \n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MessageQueue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Long")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" OFFSE_TABLE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashMap")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MessageQueue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Long")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MQClientException")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DefaultMQPullConsumer")]),t._v(" consumer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DefaultMQPullConsumer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"groupName"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tconsumer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setNamesrvAddr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1:9876"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tconsumer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 从指定topic中拉取所有消息队列")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Set")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MessageQueue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" mqs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" consumer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetchSubscribeMessageQueues")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"order-topic"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MessageQueue")]),t._v(" mq"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("mqs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取消息的offset，指定从store中获取")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" offset "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" consumer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetchConsumeOffset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"consumer from the queue:"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("mq"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('":"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("offset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PullResult")]),t._v(" pullResult "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" consumer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pullBlockIfNotFound")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n\t\t\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMessageQueueOffset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("putMessageQueueOffset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("pullResult"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getNextBeginOffset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pullResult"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPullStatus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" FOUND"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\t\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MessageExt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" messageExtList "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pullResult"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMsgFoundList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MessageExt")]),t._v(" m "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" messageExtList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBody")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" NO_MATCHED_MSG"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\t\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" NO_NEW_MSG"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\t\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" OFFSET_ILLEGAL"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\t\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\te"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printStackTrace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\tconsumer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("shutdown")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n \n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 保存上次消费的消息下标")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("putMessageQueueOffset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MessageQueue")]),t._v(" mq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" nextBeginOffset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tOFFSE_TABLE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nextBeginOffset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取上次消费的消息的下标")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Long")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMessageQueueOffset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MessageQueue")]),t._v(" mq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Long")]),t._v(" offset "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" OFFSE_TABLE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("offset "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" offset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0l")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\n \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"字段摘要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字段摘要"}},[t._v("#")]),t._v(" 字段摘要")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("字段名称")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("DefaultMQPullConsumerImpl")]),t._v(" "),a("td",[t._v("defaultMQPullConsumerImpl")]),t._v(" "),a("td",[t._v("DefaultMQPullConsumer的内部核心处理默认实现")])]),t._v(" "),a("tr",[a("td",[t._v("String")]),t._v(" "),a("td",[t._v("consumerGroup")]),t._v(" "),a("td",[t._v("消费的唯一分组")])]),t._v(" "),a("tr",[a("td",[t._v("long")]),t._v(" "),a("td",[t._v("brokerSuspendMaxTimeMillis")]),t._v(" "),a("td",[t._v("consumer取连接broker的最大延迟时间，不建议修改")])]),t._v(" "),a("tr",[a("td",[t._v("long")]),t._v(" "),a("td",[t._v("consumerTimeoutMillisWhenSuspend")]),t._v(" "),a("td",[t._v("pull取连接的最大超时时间，必须大于brokerSuspendMaxTimeMillis，不建议修改")])]),t._v(" "),a("tr",[a("td",[t._v("long")]),t._v(" "),a("td",[t._v("consumerPullTimeoutMillis")]),t._v(" "),a("td",[t._v("socket连接的最大超时时间，不建议修改")])]),t._v(" "),a("tr",[a("td",[t._v("String")]),t._v(" "),a("td",[t._v("messageModel")]),t._v(" "),a("td",[t._v("默认cluster模式")])]),t._v(" "),a("tr",[a("td",[t._v("int")]),t._v(" "),a("td",[t._v("messageQueueListener")]),t._v(" "),a("td",[t._v("消息queue监听器，用来获取topic的queue变化")])]),t._v(" "),a("tr",[a("td",[t._v("int")]),t._v(" "),a("td",[t._v("offsetStore")]),t._v(" "),a("td",[t._v("RemoteBrokerOffsetStore 远程与本地offset存储器")])]),t._v(" "),a("tr",[a("td",[t._v("int")]),t._v(" "),a("td",[t._v("registerTopics")]),t._v(" "),a("td",[t._v("注册到该consumer的topic集合")])]),t._v(" "),a("tr",[a("td",[t._v("int")]),t._v(" "),a("td",[t._v("allocateMessageQueueStrategy")]),t._v(" "),a("td",[t._v("consumer的默认获取queue的负载分配策略算法")])])])]),t._v(" "),a("h2",{attrs:{id:"构造方法摘要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构造方法摘要"}},[t._v("#")]),t._v(" 构造方法摘要")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("方法名称")]),t._v(" "),a("th",[t._v("方法描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("DefaultMQPullConsumer()")]),t._v(" "),a("td",[t._v("由默认参数值创建一个Pull消费者")])]),t._v(" "),a("tr",[a("td",[t._v("DefaultMQPullConsumer(final String consumerGroup, RPCHook rpcHook)")]),t._v(" "),a("td",[t._v("使用指定的分组名，hook创建一个消费者")])]),t._v(" "),a("tr",[a("td",[t._v("DefaultMQPullConsumer(final String consumerGroup)")]),t._v(" "),a("td",[t._v("使用指定的分组名消费者")])]),t._v(" "),a("tr",[a("td",[t._v("DefaultMQPullConsumer(RPCHook rpcHook)")]),t._v(" "),a("td",[t._v("使用指定的hook创建一个生产者")])])])]),t._v(" "),a("h2",{attrs:{id:"使用方法摘要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用方法摘要"}},[t._v("#")]),t._v(" 使用方法摘要")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("返回值")]),t._v(" "),a("th",[t._v("方法名称")]),t._v(" "),a("th",[t._v("方法描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("MQAdmin接口method")]),t._v(" "),a("td",[t._v("-------")]),t._v(" "),a("td",[t._v("------------")])]),t._v(" "),a("tr",[a("td",[t._v("void")]),t._v(" "),a("td",[t._v("createTopic(String key, String newTopic, int queueNum)")]),t._v(" "),a("td",[t._v("在broker上创建指定的topic")])]),t._v(" "),a("tr",[a("td",[t._v("void")]),t._v(" "),a("td",[t._v("createTopic(String key, String newTopic, int queueNum, int topicSysFlag)")]),t._v(" "),a("td",[t._v("在broker上创建指定的topic")])]),t._v(" "),a("tr",[a("td",[t._v("long")]),t._v(" "),a("td",[t._v("earliestMsgStoreTime(MessageQueue mq)")]),t._v(" "),a("td",[t._v("查询最早的消息存储时间")])]),t._v(" "),a("tr",[a("td",[t._v("long")]),t._v(" "),a("td",[t._v("maxOffset(MessageQueue mq)")]),t._v(" "),a("td",[t._v("查询给定消息队列的最大offset")])]),t._v(" "),a("tr",[a("td",[t._v("long")]),t._v(" "),a("td",[t._v("minOffset(MessageQueue mq)")]),t._v(" "),a("td",[t._v("查询给定消息队列的最小offset")])]),t._v(" "),a("tr",[a("td",[t._v("QueryResult")]),t._v(" "),a("td",[t._v("queryMessage(String topic, String key, int maxNum, long begin, long end)")]),t._v(" "),a("td",[t._v("按关键字查询消息")])]),t._v(" "),a("tr",[a("td",[t._v("long")]),t._v(" "),a("td",[t._v("searchOffset(MessageQueue mq, long timestamp)")]),t._v(" "),a("td",[t._v("查找指定时间的消息队列的物理offset")])]),t._v(" "),a("tr",[a("td",[t._v("MessageExt")]),t._v(" "),a("td",[t._v("viewMessage(String offsetMsgId)")]),t._v(" "),a("td",[t._v("根据给定的msgId查询消息")])]),t._v(" "),a("tr",[a("td",[t._v("MessageExt")]),t._v(" "),a("td",[t._v("public MessageExt viewMessage(String topic, String msgId)")]),t._v(" "),a("td",[t._v("根据给定的msgId查询消息，并指定topic")])]),t._v(" "),a("tr",[a("td",[t._v("MQConsumer接口method")]),t._v(" "),a("td",[t._v("-------")]),t._v(" "),a("td",[t._v("------------")])]),t._v(" "),a("tr",[a("td",[t._v("Set")]),t._v(" "),a("td",[t._v("fetchSubscribeMessageQueues(String topic)")]),t._v(" "),a("td",[t._v("根据topic获取订阅的Queue")])]),t._v(" "),a("tr",[a("td",[t._v("void")]),t._v(" "),a("td",[t._v("sendMessageBack(final MessageExt msg, final int delayLevel)")]),t._v(" "),a("td",[t._v("如果消息出来失败，可以发送回去延迟消费，delayLevel=DelayConf.DELAY_LEVEL")])]),t._v(" "),a("tr",[a("td",[t._v("void")]),t._v(" "),a("td",[t._v("sendMessageBack(final MessageExt msg, final int delayLevel, final String brokerName)")]),t._v(" "),a("td",[t._v("如果消息出来失败，可以发送回去延迟消费，delayLevel=DelayConf.DELAY_LEVEL")])]),t._v(" "),a("tr",[a("td",[t._v("MQPullConsumer接口method")]),t._v(" "),a("td",[t._v("-------")]),t._v(" "),a("td",[t._v("------------")])]),t._v(" "),a("tr",[a("td",[t._v("long")]),t._v(" "),a("td",[t._v("fetchConsumeOffset(MessageQueue mq, boolean fromStore)")]),t._v(" "),a("td",[t._v("查询给定消息队列的最大offset")])]),t._v(" "),a("tr",[a("td",[t._v("PullResult")]),t._v(" "),a("td",[t._v("pull(final MessageQueue mq, final String subExpression, final long offset,final int maxNums)")]),t._v(" "),a("td",[t._v("异步拉取制定匹配的消息")])]),t._v(" "),a("tr",[a("td",[t._v("PullResult")]),t._v(" "),a("td",[t._v("pull(final MessageQueue mq, final String subExpression, final long offset,final int maxNums, final long timeout)")]),t._v(" "),a("td",[t._v("异步拉取制定匹配的消息")])]),t._v(" "),a("tr",[a("td",[t._v("PullResult")]),t._v(" "),a("td",[t._v("pull(final MessageQueue mq, final MessageSelector selector, final long offset,final int maxNums)")]),t._v(" "),a("td",[t._v("异步拉取制定匹配的消息，通过MessageSelector器来过滤消息，参考org.apache.rocketmq.common.filter.ExpressionType")])]),t._v(" "),a("tr",[a("td",[t._v("PullResult")]),t._v(" "),a("td",[t._v("pullBlockIfNotFound(final MessageQueue mq, final String subExpression,final long offset, final int maxNums)")]),t._v(" "),a("td",[t._v("异步拉取制定匹配的消息，如果没有消息讲block住，并指定超时时间consumerPullTimeoutMillis")])]),t._v(" "),a("tr",[a("td",[t._v("void")]),t._v(" "),a("td",[t._v("pullBlockIfNotFound(final MessageQueue mq, final String subExpression, final long offset,final int maxNums, final PullCallback pullCallback)")]),t._v(" "),a("td",[t._v("异步拉取制定匹配的消息，如果没有消息讲block住，并指定超时时间consumerPullTimeoutMillis，通过回调pullCallback来消费")])]),t._v(" "),a("tr",[a("td",[t._v("void")]),t._v(" "),a("td",[t._v("updateConsumeOffset(final MessageQueue mq, final long offset)")]),t._v(" "),a("td",[t._v("更新指定mq的offset")])]),t._v(" "),a("tr",[a("td",[t._v("long")]),t._v(" "),a("td",[t._v("fetchMessageQueuesInBalance(String topic)")]),t._v(" "),a("td",[t._v("根据topic获取订阅的Queue(是balance分配后的)")])]),t._v(" "),a("tr",[a("td",[t._v("void")]),t._v(" "),a("td",[t._v("void sendMessageBack(MessageExt msg, int delayLevel, String brokerName, String consumerGroup)")]),t._v(" "),a("td",[t._v("如果消息出来失败，可以发送回去延迟消费，delayLevel=DelayConf.DELAY_LEVEL,消息可能在同一个consumerGroup消费")])]),t._v(" "),a("tr",[a("td",[t._v("void")]),t._v(" "),a("td",[t._v("shutdown()")]),t._v(" "),a("td",[t._v("关闭当前消费者实例并释放相关资源")])]),t._v(" "),a("tr",[a("td",[t._v("void")]),t._v(" "),a("td",[t._v("start()")]),t._v(" "),a("td",[t._v("启动消费者")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);