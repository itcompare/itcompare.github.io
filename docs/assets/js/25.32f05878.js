(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{644:function(t,r,s){"use strict";s.r(r);var e=s(6),_=Object(e.a)({},(function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_1-基本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-基本"}},[t._v("#")]),t._v(" 1 基本")]),t._v(" "),s("ol",[s("li",[s("p",[s("strong",[t._v("为什么我们要使用RocketMQ而不是选择其他的产品？")])]),t._v(" "),s("p",[t._v("请参考"),s("a",{attrs:{href:"http://rocketmq.apache.org/docs/motivation/",target:"_blank",rel:"noopener noreferrer"}},[t._v("为什么要选择RocketMQ"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("我是否需要安装其他的软件才能使用RocketMQ，例如zookeeper？")])]),t._v(" "),s("p",[t._v("不需要，RocketMQ可以独立的运行。")])])]),t._v(" "),s("h2",{attrs:{id:"_2-使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用"}},[t._v("#")]),t._v(" 2 使用")]),t._v(" "),s("ol",[s("li",[s("p",[s("strong",[t._v("新创建的Consumer ID从哪里开始消费消息？")])]),t._v(" "),s("p",[t._v("1）如果发送的消息在三天之内，那么消费者会从服务器中保存的第一条消息开始消费。")]),t._v(" "),s("p",[t._v("2）如果发送的消息已经超过三天，则消费者会从服务器中的最新消息开始消费，也就是从队列的尾部开始消费。")]),t._v(" "),s("p",[t._v("3）如果消费者重新启动，那么它会从最后一个消费位置开始消费消息。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("当消费失败的时候如何重新消费消息？")])]),t._v(" "),s("p",[t._v("1）在集群模式下，消费的业务逻辑代码会返回Action.ReconsumerLater，NULL，或者抛出异常，如果一条消息消费失败，最多会重试16次，之后该消息会被丢弃。")]),t._v(" "),s("p",[t._v("2）在广播消费模式下，广播消费仍然保证消息至少被消费一次，但不提供重发的选项。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("当消费失败的时候如何找到失败的消息？")])]),t._v(" "),s("p",[t._v("1）使用按时间的主题查询，可以查询到一段时间内的消息。")]),t._v(" "),s("p",[t._v("2）使用主题和消息ID来准确查询消息。")]),t._v(" "),s("p",[t._v("3）使用主题和消息的Key来准确查询所有消息Key相同的消息。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("消息只会被传递一次吗？")])]),t._v(" "),s("p",[t._v("RocketMQ 确保所有消息至少传递一次。 在大多数情况下，消息不会重复。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("如何增加一个新的Broker？")])]),t._v(" "),s("p",[t._v("1）启动一个新的Broker并将其注册到name server中的Broker列表里。")]),t._v(" "),s("p",[t._v("2）默认只自动创建内部系统topic和consumer group。 如果您希望在新节点上拥有您的业务主题和消费者组，请从现有的Broker中复制它们。 我们提供了管理工具和命令行来处理此问题。")])])]),t._v(" "),s("h2",{attrs:{id:"_3-配置相关"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置相关"}},[t._v("#")]),t._v(" 3 配置相关")]),t._v(" "),s("p",[t._v("以下回答均为默认值，可通过配置修改。")]),t._v(" "),s("ol",[s("li",[s("p",[s("strong",[t._v("消息在服务器上可以保存多长时间？")])]),t._v(" "),s("p",[t._v("存储的消息将最多保存 3 天，超过 3 天未使用的消息将被删除。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("消息体的大小限制是多少？")])]),t._v(" "),s("p",[t._v("通常是256KB")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("怎么设置消费者线程数？")])]),t._v(" "),s("p",[t._v("当你启动消费者的时候，可以设置 ConsumeThreadNums属性的值，举例如下：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("consumer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setConsumeThreadMin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsumer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setConsumeThreadMax")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"_4-错误"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-错误"}},[t._v("#")]),t._v(" 4 错误")]),t._v(" "),s("ol",[s("li",[s("p",[s("strong",[t._v("当你启动一个生产者或消费者的过程失败了并且错误信息是生产者组或消费者重复")])]),t._v(" "),s("p",[t._v("原因：使用同一个Producer/Consumer Group在同一个JVM中启动多个Producer/Consumer实例可能会导致客户端无法启动。")]),t._v(" "),s("p",[t._v("解决方案：确保一个 Producer/Consumer Group 对应的 JVM 只启动一个 Producer/Consumer 实例。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("消费者无法在广播模式下开始加载 json 文件")])]),t._v(" "),s("p",[t._v("原因：fastjson 版本太低，无法让广播消费者加载本地 offsets.json，导致消费者启动失败。 损坏的 fastjson 文件也会导致同样的问题。")]),t._v(" "),s("p",[t._v("解决方案：Fastjson 版本必须升级到 RocketMQ 客户端依赖版本，以确保可以加载本地 offsets.json。 默认情况下，offsets.json 文件在 /home/{user}/.rocketmq_offsets 中。 或者检查fastjson的完整性。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("Broker崩溃以后有什么影响？")])]),t._v(" "),s("p",[t._v("1）Master节点崩溃")]),t._v(" "),s("p",[t._v("消息不能再发送到该Broker集群，但是如果您有另一个可用的Broker集群，那么在主题存在的条件下仍然可以发送消息。消息仍然可以从Slave节点消费。")]),t._v(" "),s("p",[t._v("2）一些Slave节点崩溃")]),t._v(" "),s("p",[t._v("只要有另一个工作的slave，就不会影响发送消息。 对消费消息也不会产生影响，除非消费者组设置为优先从该Slave消费。 默认情况下，消费者组从 master 消费。")]),t._v(" "),s("p",[t._v("3）所有Slave节点崩溃")]),t._v(" "),s("p",[t._v("向master发送消息不会有任何影响，但是，如果master是SYNC_MASTER，producer会得到一个SLAVE_NOT_AVAILABLE，表示消息没有发送给任何slave。 对消费消息也没有影响，除非消费者组设置为优先从slave消费。 默认情况下，消费者组从master消费。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("Producer提示“No Topic Route Info”，如何诊断？")])]),t._v(" "),s("p",[t._v("当您尝试将消息发送到一个路由信息对生产者不可用的主题时，就会发生这种情况。")]),t._v(" "),s("p",[t._v("1）确保生产者可以连接到名称服务器并且能够从中获取路由元信息。")]),t._v(" "),s("p",[t._v("2）确保名称服务器确实包含主题的路由元信息。 您可以使用管理工具或 Web 控制台通过 topicRoute 从名称服务器查询路由元信息。")]),t._v(" "),s("p",[t._v("3）确保您的Broker将心跳发送到您的生产者正在连接的同一name server列表。")]),t._v(" "),s("p",[t._v("4）确保主题的权限为6(rw-)，或至少为2(-w-)。")]),t._v(" "),s("p",[t._v("如果找不到此主题，请通过管理工具命令updateTopic或Web控制台在Broker上创建它。")])])]),t._v(" "),s("h2",{attrs:{id:"_5-其他"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-其他"}},[t._v("#")]),t._v(" 5 其他")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("producer实例是如何上报到broker的，通过console后台可以某个topic下，某个producer group下的实例")]),t._v("\nTODO")])])])}),[],!1,null,null,null);r.default=_.exports}}]);