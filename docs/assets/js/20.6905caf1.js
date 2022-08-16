(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{633:function(t,s,e){"use strict";e.r(s);var a=e(6),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("本节介绍TLS相关配置")]),t._v(" "),e("h2",{attrs:{id:"_1-生成证书"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-生成证书"}},[t._v("#")]),t._v(" 1 生成证书")]),t._v(" "),e("p",[t._v("开发、测试的证书可以自行安装OpenSSL进行生成.建议在Linux环境下安装Open SSL并进行证书生成。")]),t._v(" "),e("h3",{attrs:{id:"_1-1-生成ca-pem"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-生成ca-pem"}},[t._v("#")]),t._v(" 1.1 生成ca.pem")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("openssl req -newkey rsa:2048 -keyout ca_rsa_private.pem -x509 -days "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("365")]),t._v(" -out ca.pem\n")])])]),e("h3",{attrs:{id:"_1-2-生成server-csr"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-生成server-csr"}},[t._v("#")]),t._v(" 1.2 生成server.csr")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("openssl req -newkey rsa:2048 -keyout server_rsa.key  -out server.csr\n")])])]),e("h3",{attrs:{id:"_1-3-生成server-pem"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-生成server-pem"}},[t._v("#")]),t._v(" 1.3 生成server.pem")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("openssl x509 -req -days "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("365")]),t._v(" -in server.csr -CA ca.pem -CAkey ca_rsa_private.pem -CAcreateserial -out server.pem\n")])])]),e("h3",{attrs:{id:"_1-4-生成client-csr"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-生成client-csr"}},[t._v("#")]),t._v(" 1.4 生成client.csr")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("openssl req -newkey rsa:2048 -keyout client_rsa.key -out client.csr\n")])])]),e("h3",{attrs:{id:"_1-5-生成client-pem"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-生成client-pem"}},[t._v("#")]),t._v(" 1.5 生成client.pem")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("openssl x509 -req -days "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("365")]),t._v(" -in client.csr -CA ca.pem -CAkey ca_rsa_private.pem -CAcreateserial -out client.pem\n")])])]),e("h3",{attrs:{id:"_1-6-生成server-key"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-生成server-key"}},[t._v("#")]),t._v(" 1.6 生成server.key")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("openssl pkcs8 -topk8 -v1 PBE-SHA1-RC4-128 -in  server_rsa.key -out server.key\n")])])]),e("h3",{attrs:{id:"_1-7-生成client-key"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-生成client-key"}},[t._v("#")]),t._v(" 1.7 生成client.key")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("openssl pkcs8 -topk8 -v1 PBE-SHA1-RC4-128 -in client_rsa.key -out client.key\n")])])]),e("h2",{attrs:{id:"_2-创建tls-properties"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建tls-properties"}},[t._v("#")]),t._v(" 2 创建tls.properties")]),t._v(" "),e("p",[t._v("创建tls.properties文件，并将生成证书的路径和密码进行正确的配置.")]),t._v(" "),e("div",{staticClass:"language-properties extra-class"},[e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The flag to determine whether use test mode when initialize TLS context. default is true")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tls.test.mode.enable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("false                     ")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Indicates how SSL engine respect to client authentication, default is none")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tls.server.need.client.auth")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("require   ")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The store path of server-side private key")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tls.server.keyPath")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("/opt/certFiles/server.key")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The password of the server-side private key")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tls.server.keyPassword")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("123456")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The store path of server-side X.509 certificate chain in PEM format")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tls.server.certPath")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("/opt/certFiles/server.pem")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# To determine whether verify the client endpoint's certificate strictly. default is false")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tls.server.authClient")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("false")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The store path of trusted certificates for verifying the client endpoint's certificate")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tls.server.trustCertPath")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("/opt/certFiles/ca.pem")]),t._v("\n")])])]),e("p",[t._v("如果需要客户端连接时也进行认证，则还需要在该文件中增加以下内容")]),t._v(" "),e("div",{staticClass:"language-properties extra-class"},[e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The store path of client-side private key ")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tls.client.keyPath")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("/opt/certFiles/client.key")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The password of the client-side private key")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tls.client.keyPassword")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("123456")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The store path of client-side X.509 certificate chain in PEM format")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tls.client.certPath")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("/opt/certFiles/client.pem")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# To determine whether verify the server endpoint's certificate strictly")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tls.client.authServer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("false                    ")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The store path of trusted certificates for verifying the server endpoint's certificate")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tls.client.trustCertPath")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("/opt/certFiles/ca.pem")]),t._v("\n")])])]),e("h2",{attrs:{id:"_3-配置rocketmq启动参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置rocketmq启动参数"}},[t._v("#")]),t._v(" 3 配置Rocketmq启动参数")]),t._v(" "),e("p",[t._v("编辑rocketmq/bin路径下的配置文件，使tls.properties配置生效.-Dtls.config.file的值需要替换为步骤2中创建的tls.peoperties文件的路径")]),t._v(" "),e("h3",{attrs:{id:"_3-1-编辑runserver-sh-在java-opt中增加以下内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-编辑runserver-sh-在java-opt中增加以下内容"}},[t._v("#")]),t._v(" 3.1 编辑runserver.sh,,在JAVA_OPT中增加以下内容：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("JAVA_OPT")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${JAVA_OPT}")]),t._v(' -Dtls.server.mode=enforcing -Dtls.config.file=/opt/rocketmq-4.9.3/conf/tls.properties"')]),t._v("\n")])])]),e("h3",{attrs:{id:"_3-2-编辑runbroker-sh-在java-opt中增加以下内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-编辑runbroker-sh-在java-opt中增加以下内容"}},[t._v("#")]),t._v(" 3.2 编辑runbroker.sh,在JAVA_OPT中增加以下内容：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("JAVA_OPT")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${JAVA_OPT}")]),t._v(' -Dorg.apache.rocketmq.remoting.ssl.mode=enforcing -Dtls.config.file=/opt/rocketmq-4.9.3/conf/tls.properties  -Dtls.enable=true"')]),t._v("\n")])])]),e("h1",{attrs:{id:"_4-客户端连接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-客户端连接"}},[t._v("#")]),t._v(" 4 客户端连接")]),t._v(" "),e("p",[t._v("创建客户端使用的tlsclient.properties,并加入以下内容:")]),t._v(" "),e("div",{staticClass:"language-properties extra-class"},[e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The store path of client-side private key ")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tls.client.keyPath")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("/opt/certFiles/client.key")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The password of the client-side private key")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tls.client.keyPassword")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("123456")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The store path of client-side X.509 certificate chain in PEM format")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tls.client.certPath")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("/opt/certFiles/client.pem               ")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The store path of trusted certificates for verifying the server endpoint's certificate")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tls.client.trustCertPath")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("/opt/certFiles/ca.pem")]),t._v("\n")])])]),e("p",[t._v("JVM中需要加以下参数.tls.config.file的值需要使用之前创建的文件：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("-Dtls.client.authServer"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true -Dtls.enable"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true  -Dtls.test.mode.enable"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("false  -Dtls.config.file"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/opt/certs/tlsclient.properties\n")])])]),e("p",[t._v("在客户端连接的代码中，需要将setUseTLS设置为true:")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExampleProducer")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DefaultMQProducer")]),t._v(" producer "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DefaultMQProducer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"please_rename_unique_group_name"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//setUseTLS should be true")]),t._v("\n        producer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setUseTLS")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        producer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Send messages as usual.")]),t._v("\n        producer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("shutdown")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("    \n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);