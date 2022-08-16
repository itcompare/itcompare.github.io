(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{602:function(e,r,o){e.exports=o.p+"assets/img/rocketmq_architecture_1.43303881.png"},603:function(e,r,o){e.exports=o.p+"assets/img/rocketmq_architecture_2.852c89df.png"},604:function(e,r,o){e.exports=o.p+"assets/img/rocketmq_architecture_3.8a775ef1.png"},640:function(e,r,o){"use strict";o.r(r);var a=o(6),v=Object(a.a)({},(function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"_1-技术架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-技术架构"}},[e._v("#")]),e._v(" 1 技术架构")]),e._v(" "),a("p",[a("img",{attrs:{src:o(602),alt:""}})]),e._v(" "),a("p",[e._v("RocketMQ架构上主要分为四部分，如上图所示:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Producer：消息发布的角色，支持分布式集群方式部署。Producer通过MQ的负载均衡模块选择相应的Broker集群队列进行消息投递，投递的过程支持快速失败并且低延迟。")])]),e._v(" "),a("li",[a("p",[e._v("Consumer：消息消费的角色，支持分布式集群方式部署。支持以push推，pull拉两种模式对消息进行消费。同时也支持集群方式和广播方式的消费，它提供实时消息订阅机制，可以满足大多数用户的需求。")])]),e._v(" "),a("li",[a("p",[e._v("NameServer：NameServer是一个非常简单的Topic路由注册中心，其角色类似Dubbo中的zookeeper，支持Broker的动态注册与发现。主要包括两个功能：Broker管理，NameServer接受Broker集群的注册信息并且保存下来作为路由信息的基本数据。然后提供心跳检测机制，检查Broker是否还存活；路由信息管理，每个NameServer将保存关于Broker集群的整个路由信息和用于客户端查询的队列信息。然后Producer和Consumser通过NameServer就可以知道整个Broker集群的路由信息，从而进行消息的投递和消费。NameServer通常也是集群的方式部署，各实例间相互不进行信息通讯。Broker是向每一台NameServer注册自己的路由信息，所以每一个NameServer实例上面都保存一份完整的路由信息。当某个NameServer因某种原因下线了，Broker仍然可以向其它NameServer同步其路由信息，Producer和Consumer仍然可以动态感知Broker的路由的信息。")])]),e._v(" "),a("li",[a("p",[e._v("BrokerServer：Broker主要负责消息的存储、投递和查询以及服务高可用保证，为了实现这些功能，Broker包含了以下几个重要子模块。")]),e._v(" "),a("ol",[a("li",[e._v("Remoting Module：整个Broker的实体，负责处理来自Client端的请求。")]),e._v(" "),a("li",[e._v("Client Manager：负责管理客户端(Producer/Consumer)和维护Consumer的Topic订阅信息。")]),e._v(" "),a("li",[e._v("Store Service：提供方便简单的API接口处理消息存储到物理硬盘和查询功能。")]),e._v(" "),a("li",[e._v("HA Service：高可用服务，提供Master Broker 和 Slave Broker之间的数据同步功能。")]),e._v(" "),a("li",[e._v("Index Service：根据特定的Message key对投递到Broker的消息进行索引服务，以提供消息的快速查询。")])])])]),e._v(" "),a("p",[a("img",{attrs:{src:o(603),alt:""}})]),e._v(" "),a("h2",{attrs:{id:"_2-部署架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-部署架构"}},[e._v("#")]),e._v(" 2 部署架构")]),e._v(" "),a("p",[a("img",{attrs:{src:o(604),alt:""}})]),e._v(" "),a("h3",{attrs:{id:"rocketmq-网络部署特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rocketmq-网络部署特点"}},[e._v("#")]),e._v(" RocketMQ 网络部署特点")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("NameServer是一个几乎无状态节点，可集群部署，节点之间无任何信息同步。")])]),e._v(" "),a("li",[a("p",[e._v("Broker部署相对复杂，Broker分为Master与Slave，一个Master可以对应多个Slave，但是一个Slave只能对应一个Master，Master与Slave 的对应关系通过指定相同的BrokerName，不同的BrokerId 来定义，BrokerId为0表示Master，非0表示Slave。Master也可以部署多个。每个Broker与NameServer集群中的所有节点建立长连接，定时注册Topic信息到所有NameServer。 注意：当前RocketMQ版本在部署架构上支持一Master多Slave，但只有BrokerId=1的从服务器才会参与消息的读负载。")])]),e._v(" "),a("li",[a("p",[e._v("Producer与NameServer集群中的其中一个节点（随机选择）建立长连接，定期从NameServer获取Topic路由信息，并向提供Topic 服务的Master建立长连接，且定时向Master发送心跳。Producer完全无状态，可集群部署。")])]),e._v(" "),a("li",[a("p",[e._v("Consumer与NameServer集群中的其中一个节点（随机选择）建立长连接，定期从NameServer获取Topic路由信息，并向提供Topic服务的Master、Slave建立长连接，且定时向Master、Slave发送心跳。Consumer既可以从Master订阅消息，也可以从Slave订阅消息，消费者在向Master拉取消息时，Master服务器会根据拉取偏移量与最大偏移量的距离（判断是否读老消息，产生读I/O），以及从服务器是否可读等因素建议下一次是从Master还是Slave拉取。")])])]),e._v(" "),a("p",[e._v("结合部署架构图，描述集群工作流程：")]),e._v(" "),a("ul",[a("li",[e._v("启动NameServer，NameServer起来后监听端口，等待Broker、Producer、Consumer连上来，相当于一个路由控制中心。")]),e._v(" "),a("li",[e._v("Broker启动，跟所有的NameServer保持长连接，定时发送心跳包。心跳包中包含当前Broker信息(IP+端口等)以及存储所有Topic信息。注册成功后，NameServer集群中就有Topic跟Broker的映射关系。")]),e._v(" "),a("li",[e._v("收发消息前，先创建Topic，创建Topic时需要指定该Topic要存储在哪些Broker上，也可以在发送消息时自动创建Topic。")]),e._v(" "),a("li",[e._v("Producer发送消息，启动时先跟NameServer集群中的其中一台建立长连接，并从NameServer中获取当前发送的Topic存在哪些Broker上，轮询从队列列表中选择一个队列，然后与队列所在的Broker建立长连接从而向Broker发消息。")]),e._v(" "),a("li",[e._v("Consumer跟Producer类似，跟其中一台NameServer建立长连接，获取当前订阅Topic存在哪些Broker上，然后直接跟Broker建立连接通道，开始消费消息。")])])])}),[],!1,null,null,null);r.default=v.exports}}]);