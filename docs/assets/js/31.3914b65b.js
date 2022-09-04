(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{677:function(t,_,v){"use strict";v.r(_);var e=v(6),r=Object(e.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"_1-权限控制特性介绍"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-权限控制特性介绍"}},[t._v("#")]),t._v(" 1.权限控制特性介绍")]),t._v(" "),v("p",[t._v("权限控制（ACL）主要为RocketMQ提供Topic资源级别的用户访问控制。用户在使用RocketMQ权限控制时，可以在Client客户端通过 RPCHook注入AccessKey和SecretKey签名；同时，将对应的权限控制属性（包括Topic访问权限、IP白名单和AccessKey和SecretKey签名等）设置在distribution/conf/plain_acl.yml的配置文件中。Broker端对AccessKey所拥有的权限进行校验，校验不过，抛出异常；\nACL客户端可以参考："),v("strong",[t._v("org.apache.rocketmq.example.simple")]),t._v("包下面的"),v("strong",[t._v("AclClient")]),t._v("代码。")]),t._v(" "),v("h2",{attrs:{id:"_2-权限控制的定义与属性值"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-权限控制的定义与属性值"}},[t._v("#")]),t._v(" 2. 权限控制的定义与属性值")]),t._v(" "),v("h3",{attrs:{id:"_2-1权限定义"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1权限定义"}},[t._v("#")]),t._v(" 2.1权限定义")]),t._v(" "),v("p",[t._v("对RocketMQ的Topic资源访问权限控制定义主要如下表所示，分为以下四种")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("权限")]),t._v(" "),v("th",[t._v("含义")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("DENY")]),t._v(" "),v("td",[t._v("拒绝")])]),t._v(" "),v("tr",[v("td",[t._v("ANY")]),t._v(" "),v("td",[t._v("PUB 或者 SUB 权限")])]),t._v(" "),v("tr",[v("td",[t._v("PUB")]),t._v(" "),v("td",[t._v("发送权限")])]),t._v(" "),v("tr",[v("td",[t._v("SUB")]),t._v(" "),v("td",[t._v("订阅权限")])])])]),t._v(" "),v("h3",{attrs:{id:"_2-2-权限定义的关键属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-权限定义的关键属性"}},[t._v("#")]),t._v(" 2.2 权限定义的关键属性")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("字段")]),t._v(" "),v("th",[t._v("取值")]),t._v(" "),v("th",[t._v("含义")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("globalWhiteRemoteAddresses")]),t._v(" "),v("td",[t._v("*;192.168.*.*;192.168.0.1")]),t._v(" "),v("td",[t._v("全局IP白名单")])]),t._v(" "),v("tr",[v("td",[t._v("accessKey")]),t._v(" "),v("td",[t._v("字符串")]),t._v(" "),v("td",[t._v("Access Key")])]),t._v(" "),v("tr",[v("td",[t._v("secretKey")]),t._v(" "),v("td",[t._v("字符串")]),t._v(" "),v("td",[t._v("Secret Key")])]),t._v(" "),v("tr",[v("td",[t._v("whiteRemoteAddress")]),t._v(" "),v("td",[t._v("*;192.168.*.*;192.168.0.1")]),t._v(" "),v("td",[t._v("用户IP白名单")])]),t._v(" "),v("tr",[v("td",[t._v("admin")]),t._v(" "),v("td",[t._v("true;false")]),t._v(" "),v("td",[t._v("是否管理员账户")])]),t._v(" "),v("tr",[v("td",[t._v("defaultTopicPerm")]),t._v(" "),v("td",[t._v("DENY;PUB;SUB;PUB|SUB")]),t._v(" "),v("td",[t._v("默认的Topic权限")])]),t._v(" "),v("tr",[v("td",[t._v("defaultGroupPerm")]),t._v(" "),v("td",[t._v("DENY;PUB;SUB;PUB|SUB")]),t._v(" "),v("td",[t._v("默认的ConsumerGroup权限")])]),t._v(" "),v("tr",[v("td",[t._v("topicPerms")]),t._v(" "),v("td",[t._v("topic=权限")]),t._v(" "),v("td",[t._v("各个Topic的权限")])]),t._v(" "),v("tr",[v("td",[t._v("groupPerms")]),t._v(" "),v("td",[t._v("group=权限")]),t._v(" "),v("td",[t._v("各个ConsumerGroup的权限")])])])]),t._v(" "),v("p",[t._v("具体可以参考"),v("strong",[t._v("distribution/conf/plain_acl.yml")]),t._v("配置文件")]),t._v(" "),v("h2",{attrs:{id:"_3-支持权限控制的集群部署"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-支持权限控制的集群部署"}},[t._v("#")]),t._v(" 3. 支持权限控制的集群部署")]),t._v(" "),v("p",[t._v("在"),v("strong",[t._v("distribution/conf/plain_acl.yml")]),t._v("配置文件中按照上述说明定义好权限属性后，打开"),v("strong",[t._v("aclEnable")]),t._v("开关变量即可开启RocketMQ集群的ACL特性。这里贴出Broker端开启ACL特性的properties配置文件内容：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("brokerClusterName=DefaultCluster\nbrokerName=broker-a\nbrokerId=0\ndeleteWhen=04\nfileReservedTime=48\nbrokerRole=ASYNC_MASTER\nflushDiskType=ASYNC_FLUSH\nstorePathRootDir=/data/rocketmq/rootdir-a-m\nstorePathCommitLog=/data/rocketmq/commitlog-a-m\nautoCreateSubscriptionGroup=true\n## if acl is open,the flag will be true\naclEnable=true\nlistenPort=10911\nbrokerIP1=XX.XX.XX.XX1\nnamesrvAddr=XX.XX.XX.XX:9876\n")])])]),v("h2",{attrs:{id:"_4-权限控制主要流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-权限控制主要流程"}},[t._v("#")]),t._v(" 4. 权限控制主要流程")]),t._v(" "),v("p",[t._v("ACL主要流程分为两部分，主要包括权限解析和权限校验。")]),t._v(" "),v("h3",{attrs:{id:"_4-1-权限解析"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-权限解析"}},[t._v("#")]),t._v(" 4.1 权限解析")]),t._v(" "),v("p",[t._v("Broker端对客户端的RequestCommand请求进行解析，拿到需要鉴权的属性字段。\n主要包括：\n（1）AccessKey：类似于用户名，代指用户主体，权限数据与之对应；\n（2）Signature：客户根据 SecretKey 签名得到的串，服务端再用SecretKey进行签名验证；")]),t._v(" "),v("h3",{attrs:{id:"_4-2-权限校验"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-权限校验"}},[t._v("#")]),t._v(" 4.2 权限校验")]),t._v(" "),v("p",[t._v("Broker端对权限的校验逻辑主要分为以下几步：\n（1）检查是否命中全局 IP 白名单；如果是，则认为校验通过；否则走 2；\n（2）检查是否命中用户 IP 白名单；如果是，则认为校验通过；否则走 3；\n（3）校验签名，校验不通过，抛出异常；校验通过，则走 4；\n（4）对用户请求所需的权限 和 用户所拥有的权限进行校验；不通过，抛出异常；\n用户所需权限的校验需要注意已下内容：\n（1）特殊的请求例如 UPDATE_AND_CREATE_TOPIC 等，只能由 admin 账户进行操作；\n（2）对于某个资源，如果有显性配置权限，则采用配置的权限；如果没有显性配置权限，则采用默认的权限；")]),t._v(" "),v("h2",{attrs:{id:"_5-热加载修改后权限控制定义"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-热加载修改后权限控制定义"}},[t._v("#")]),t._v(" 5. 热加载修改后权限控制定义")]),t._v(" "),v("p",[t._v("RocketMQ的权限控制存储的默认实现是基于yml配置文件。用户可以动态修改权限控制定义的属性，而不需重新启动Broker服务节点。")]),t._v(" "),v("h2",{attrs:{id:"_6-权限控制的使用限制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-权限控制的使用限制"}},[t._v("#")]),t._v(" 6. 权限控制的使用限制")]),t._v(" "),v("p",[t._v("(1)如果ACL与高可用部署(Master/Slave架构)同时启用，那么需要在Broker Master节点的distribution/conf/plain_acl.yml配置文件中\n设置全局白名单信息，即为将Slave节点的ip地址设置至Master节点plain_acl.yml配置文件的全局白名单中。")]),t._v(" "),v("p",[t._v("(2)如果ACL与高可用部署(多副本Dledger架构)同时启用，由于出现节点宕机时，Dledger Group组内会自动选主，那么就需要将Dledger Group组\n内所有Broker节点的plain_acl.yml配置文件的白名单设置所有Broker节点的ip地址。")]),t._v(" "),v("h2",{attrs:{id:"_7-acl-mqadmin配置管理命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-acl-mqadmin配置管理命令"}},[t._v("#")]),t._v(" 7. ACL mqadmin配置管理命令")]),t._v(" "),v("h3",{attrs:{id:"_7-1-更新acl配置文件中-account-的属性值"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-更新acl配置文件中-account-的属性值"}},[t._v("#")]),t._v(" 7.1 更新ACL配置文件中“account”的属性值")]),t._v(" "),v("p",[t._v("该命令的示例如下：")]),t._v(" "),v("p",[t._v("sh mqadmin updateAclConfig -n 192.168.1.2:9876 -b 192.168.12.134:10911 -a RocketMQ -s 1234567809123\n-t topicA=DENY,topicD=SUB -g groupD=DENY,groupB=SUB")]),t._v(" "),v("p",[t._v("说明：如果不存在则会在ACL Config YAML配置文件中创建；若存在，则会更新对应的“accounts”的属性值;\n如果指定的是集群名称，则会在集群中各个broker节点执行该命令；否则会在单个broker节点执行该命令。")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("取值")]),t._v(" "),v("th",[t._v("含义")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("n")]),t._v(" "),v("td",[t._v("eg:192.168.1.2:9876")]),t._v(" "),v("td",[t._v("namesrv地址(必填)")])]),t._v(" "),v("tr",[v("td",[t._v("c")]),t._v(" "),v("td",[t._v("eg:DefaultCluster")]),t._v(" "),v("td",[t._v("指定集群名称(与broker地址二选一)")])]),t._v(" "),v("tr",[v("td",[t._v("b")]),t._v(" "),v("td",[t._v("eg:192.168.12.134:10911")]),t._v(" "),v("td",[t._v("指定broker地址(与集群名称二选一)")])]),t._v(" "),v("tr",[v("td",[t._v("a")]),t._v(" "),v("td",[t._v("eg:RocketMQ")]),t._v(" "),v("td",[t._v("Access Key值(必填)")])]),t._v(" "),v("tr",[v("td",[t._v("s")]),t._v(" "),v("td",[t._v("eg:1234567809123")]),t._v(" "),v("td",[t._v("Secret Key值(可选)")])]),t._v(" "),v("tr",[v("td",[t._v("m")]),t._v(" "),v("td",[t._v("eg:true")]),t._v(" "),v("td",[t._v("是否管理员账户(可选)")])]),t._v(" "),v("tr",[v("td",[t._v("w")]),t._v(" "),v("td",[t._v("eg:192.168.0.*")]),t._v(" "),v("td",[t._v("whiteRemoteAddress,用户IP白名单(可选)")])]),t._v(" "),v("tr",[v("td",[t._v("i")]),t._v(" "),v("td",[t._v("eg:DENY;PUB;SUB;PUB|SUB")]),t._v(" "),v("td",[t._v("defaultTopicPerm,默认Topic权限(可选)")])]),t._v(" "),v("tr",[v("td",[t._v("u")]),t._v(" "),v("td",[t._v("eg:DENY;PUB;SUB;PUB|SUB")]),t._v(" "),v("td",[t._v("defaultGroupPerm,默认ConsumerGroup权限(可选)")])]),t._v(" "),v("tr",[v("td",[t._v("t")]),t._v(" "),v("td",[t._v("eg:topicA=DENY,topicD=SUB")]),t._v(" "),v("td",[t._v("topicPerms,各个Topic的权限(可选)")])]),t._v(" "),v("tr",[v("td",[t._v("g")]),t._v(" "),v("td",[t._v("eg:groupD=DENY,groupB=SUB")]),t._v(" "),v("td",[t._v("groupPerms,各个ConsumerGroup的权限(可选)")])])])]),t._v(" "),v("h3",{attrs:{id:"_7-2-删除acl配置文件里面的对应-account"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-删除acl配置文件里面的对应-account"}},[t._v("#")]),t._v(" 7.2 删除ACL配置文件里面的对应“account”")]),t._v(" "),v("p",[t._v("该命令的示例如下：")]),t._v(" "),v("p",[t._v("sh mqadmin deleteAccessConfig -n 192.168.1.2:9876 -c DefaultCluster -a RocketMQ")]),t._v(" "),v("p",[t._v('说明：如果指定的是集群名称，则会在集群中各个broker节点执行该命令；否则会在单个broker节点执行该命令。\n其中，参数"a"为Access Key的值，用以标识唯一账户id，因此该命令的参数中指定账户id即可。')]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("取值")]),t._v(" "),v("th",[t._v("含义")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("n")]),t._v(" "),v("td",[t._v("eg:192.168.1.2:9876")]),t._v(" "),v("td",[t._v("namesrv地址(必填)")])]),t._v(" "),v("tr",[v("td",[t._v("c")]),t._v(" "),v("td",[t._v("eg:DefaultCluster")]),t._v(" "),v("td",[t._v("指定集群名称(与broker地址二选一)")])]),t._v(" "),v("tr",[v("td",[t._v("b")]),t._v(" "),v("td",[t._v("eg:192.168.12.134:10911")]),t._v(" "),v("td",[t._v("指定broker地址(与集群名称二选一)")])]),t._v(" "),v("tr",[v("td",[t._v("a")]),t._v(" "),v("td",[t._v("eg:RocketMQ")]),t._v(" "),v("td",[t._v("Access Key的值(必填)")])])])]),t._v(" "),v("h3",{attrs:{id:"_7-3-更新acl配置文件里面中的全局白名单"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-更新acl配置文件里面中的全局白名单"}},[t._v("#")]),t._v(" 7.3 更新ACL配置文件里面中的全局白名单")]),t._v(" "),v("p",[t._v("该命令的示例如下：")]),t._v(" "),v("p",[t._v("sh mqadmin updateGlobalWhiteAddr -n 192.168.1.2:9876 -b 192.168.12.134:10911 -g 10.10.154.1,10.10.154.2")]),t._v(" "),v("p",[t._v('说明：如果指定的是集群名称，则会在集群中各个broker节点执行该命令；否则会在单个broker节点执行该命令。\n其中，参数"g"为全局IP白名的值，用以更新ACL配置文件中的“globalWhiteRemoteAddresses”字段的属性值。')]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("取值")]),t._v(" "),v("th",[t._v("含义")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("n")]),t._v(" "),v("td",[t._v("eg:192.168.1.2:9876")]),t._v(" "),v("td",[t._v("namesrv地址(必填)")])]),t._v(" "),v("tr",[v("td",[t._v("c")]),t._v(" "),v("td",[t._v("eg:DefaultCluster")]),t._v(" "),v("td",[t._v("指定集群名称(与broker地址二选一)")])]),t._v(" "),v("tr",[v("td",[t._v("b")]),t._v(" "),v("td",[t._v("eg:192.168.12.134:10911")]),t._v(" "),v("td",[t._v("指定broker地址(与集群名称二选一)")])]),t._v(" "),v("tr",[v("td",[t._v("g")]),t._v(" "),v("td",[t._v("eg:10.10.154.1,10.10.154.2")]),t._v(" "),v("td",[t._v("全局IP白名单(必填)")])])])]),t._v(" "),v("h3",{attrs:{id:"_7-4-查询集群-broker的acl配置文件版本信息"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-4-查询集群-broker的acl配置文件版本信息"}},[t._v("#")]),t._v(" 7.4 查询集群/Broker的ACL配置文件版本信息")]),t._v(" "),v("p",[t._v("该命令的示例如下：")]),t._v(" "),v("p",[t._v("sh mqadmin clusterAclConfigVersion -n 192.168.1.2:9876 -c DefaultCluster")]),t._v(" "),v("p",[t._v("说明：如果指定的是集群名称，则会在集群中各个broker节点执行该命令；否则会在单个broker节点执行该命令。")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("取值")]),t._v(" "),v("th",[t._v("含义")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("n")]),t._v(" "),v("td",[t._v("eg:192.168.1.2:9876")]),t._v(" "),v("td",[t._v("namesrv地址(必填)")])]),t._v(" "),v("tr",[v("td",[t._v("c")]),t._v(" "),v("td",[t._v("eg:DefaultCluster")]),t._v(" "),v("td",[t._v("指定集群名称(与broker地址二选一)")])]),t._v(" "),v("tr",[v("td",[t._v("b")]),t._v(" "),v("td",[t._v("eg:192.168.12.134:10911")]),t._v(" "),v("td",[t._v("指定broker地址(与集群名称二选一)")])])])]),t._v(" "),v("h3",{attrs:{id:"_7-5-查询集群-broker的acl配置文件全部内容"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-5-查询集群-broker的acl配置文件全部内容"}},[t._v("#")]),t._v(" 7.5 查询集群/Broker的ACL配置文件全部内容")]),t._v(" "),v("p",[t._v("该命令的示例如下：")]),t._v(" "),v("p",[t._v("sh mqadmin getAclConfig -n 192.168.1.2:9876 -c DefaultCluster")]),t._v(" "),v("p",[t._v("说明：如果指定的是集群名称，则会在集群中各个broker节点执行该命令；否则会在单个broker节点执行该命令。")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("取值")]),t._v(" "),v("th",[t._v("含义")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("n")]),t._v(" "),v("td",[t._v("eg:192.168.1.2:9876")]),t._v(" "),v("td",[t._v("namesrv地址(必填)")])]),t._v(" "),v("tr",[v("td",[t._v("c")]),t._v(" "),v("td",[t._v("eg:DefaultCluster")]),t._v(" "),v("td",[t._v("指定集群名称(与broker地址二选一)")])]),t._v(" "),v("tr",[v("td",[t._v("b")]),t._v(" "),v("td",[t._v("eg:192.168.12.134:10911")]),t._v(" "),v("td",[t._v("指定broker地址(与集群名称二选一)")])])])]),t._v(" "),v("p",[v("strong",[t._v("特别注意")]),t._v("开启Acl鉴权认证后导致Master/Slave和Dledger模式下Broker同步数据异常的问题，\n在社区[4.5.1]版本中已经修复，具体的PR链接为：#1149。")])])}),[],!1,null,null,null);_.default=r.exports}}]);