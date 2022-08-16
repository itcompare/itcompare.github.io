(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{653:function(e,s,a){"use strict";a.r(s);var t=a(6),v=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("本节重点介绍系统（JVM/OS）的配置")]),e._v(" "),a("h2",{attrs:{id:"_1-jvm-选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-jvm-选项"}},[e._v("#")]),e._v(" "),a("strong",[e._v("1 JVM 选项")])]),e._v(" "),a("p",[e._v("建议使用最新发布的 JDK 1.8 版本。设置相同的 Xms 和 Xmx 值以防止 JVM 调整堆大小，并获得更好的性能。一种通用的JVM配置如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("-server -Xms8g -Xmx8g -Xmn4g\n")])])]),a("p",[e._v("设置 Direct ByteBuffer 内存大小。当 Direct ByteBuffer 达到指定大小时，将触发 Full GC：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("-XXMaxDirectMemorySize=15g\n")])])]),a("p",[e._v("如果你不在乎 RocketMQ broker 的启动时间，建议启用预分配 Java 堆以确保在 JVM 初始化期间为每个页面分配内存。你可以通过以下方式启用它：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("-XX+AlwaysPreTouch\n")])])]),a("p",[e._v("禁用偏向锁定可以减少 JVM 停顿：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("-XX-UseBiasedLocking\n")])])]),a("p",[e._v("关于垃圾收集器，推荐使用 JDK 1.8 的 G1 收集器：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("-XX+UseG1GC -XXG1HeapRegionSize=16m \n-XXG1ReservePercent=25\n-XXInitiatingHeapOccupancyPercent=30\n")])])]),a("p",[e._v("这些 GC 选项看起来有点激进，但事实证明它在生产环境中具有良好的性能")]),e._v(" "),a("p",[e._v("不要把-XXMaxGCPauseMillis 的值设置太小，否则JVM会使用一个小的新生代来实现这个目标，从而导致频繁发生minor GC。因此，建议使用滚动 GC 日志文件：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("-XX+UseGCLogFileRotation \n-XXNumberOfGCLogFiles=5 \n-XXGCLogFileSize=30m\n")])])]),a("p",[e._v("写 GC 文件会增加 broker 的延迟，因此可以考虑将 GC 日志文件重定向到内存文件系统：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("-Xloggcdevshmmq_gc_%p.log123\n")])])]),a("h2",{attrs:{id:"_2-linux-内核参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-linux-内核参数"}},[e._v("#")]),e._v(" 2 Linux 内核参数")]),e._v(" "),a("p",[e._v("在 bin 文件夹里，有一个 os.sh 脚本，里面列出了许多的内核参数，只需稍作更改即可用于生产用途。需特别关注以下参数，如想了解更多细节，请参考文档/proc/sys/vm/*。")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("vm.extra_free_kbytes")]),e._v(", 控制VM在后台回收（kswapd）开始的阈值和直接回收（通过分配进程）开始的阈值之间保留额外的空闲内存。通过使用这个参数，RocketMQ 可以避免在内存分配过程中出现高延迟。（与内核版本版本有关）")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("vm.min_free_kbytes")]),e._v(", 该值不应设置低于1024KB，否则系统将遭到破坏，并且在高负载环境下容易出现死锁。")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("vm.max_map_count")]),e._v(", 规定进程可以拥有的最大内存映射区域数。 RocketMQ 使用 mmap 来加载 CommitLog 和 ConsumeQueue，因此建议将此参数设置为较大的值。")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("vm.swappiness")]),e._v(", 定义内核交换内存页的频率。该值若较大，则会导致频繁交换，较小则会减少交换量。为了避免交换延迟，建议将此值设为 10。")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("File descriptor limits")]),e._v(", RocketMQ 需要给文件（CommitLog 和 ConsumeQueue）和网络连接分配文件描述符。因此建议将该值设置为 655350。")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Disk scheduler")]),e._v(", 推荐使用deadline IO 调度器，它可以为请求提供有保证的延迟。")])])])])}),[],!1,null,null,null);s.default=v.exports}}]);