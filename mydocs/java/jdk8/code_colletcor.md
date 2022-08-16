---
title: jdk8常用API
date: 2022-08-16
author: fanghuabao
categories:
- java
tags:
- jdk8
---


## Runtime.getRuntime()
获取机器核数
```java
Runtime.getRuntime().availableProcessors()
```

## 获取PID

```java
// format: "pid@hostname"
String HOST_NAME = ManagementFactory.getRuntimeMXBean().getName(); 
public static int getPid() {
    try {
        return Integer.parseInt(HOST_NAME.substring(0, HOST_NAME.indexOf('@')));
    } catch (Exception e) {
        return -1;
    }
}

```


## ConcurrentHashMap
### putIfAbsent(K key, V value)
V putIfAbsent(K key, V value);  
- key不存在，插入key,value，返回null  
- key存在时，直接返回当前key所对应的value，相当于get(key)  


