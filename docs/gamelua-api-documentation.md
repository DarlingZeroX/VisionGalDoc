# 游戏API文档
## 命名空间
### Application
描述：应用程序命名空间，包含应用程序相关的函数和变量。
| 方法名 | 返回值 | 描述 |
|-----|------|------|
| [Quit()](#等待) |  `nil` | 退出游戏 |
| [OpenURL(`string` URL)](#等待) |  `nil` | 打开URL |
使用示例
```lua
Application.OpenURL(" https://darlingzerox.github.io/VisionGalDoc/")
```
### GalGame
| 方法名 | 返回值 | 描述 |
|-----|------|------|
| [GetEngine()](#等待) |  [`GalGameEngine`](galgame-api-documentation.md) | 获取引擎对象 |  

具体方法请参考[GalGame引擎](galgame-api-documentation.md)

### Input
描述：输入命名空间，包含输入相关的函数和变量。
| 方法名 | 返回值 | 描述 |
|-----|------|------|
| [GetMouseButtonDown(`int` 键名)](#等待) |  `bool` | 获取鼠标按钮是否按下 |
| [GetMouseButtonUp(`int` 键名)](#等待) |  `bool` | 获取鼠标按钮是否松开 |
| [GetMouseButtonHeld(`int` 键名)](#等待) |  `bool` | 获取鼠标按钮是否按下 |
| [GetKeyName(`string` 键名)](#等待) |  `string` | 获取键盘键名 |
| [GetKeyNameDown(`string` 键名)](#等待) |  `bool` | 获取键盘键是否按下 |
| [GetKeyNameUp(`string` 键名)](#等待) |  `bool` | 获取键盘键是否松开 |

## 全局变量
### 转场管理器
描述：转场管理器，用于管理转场效果。
| 方法名 | 返回值 | 描述 |
|-----|------|------|
| [开始转场命令(`string` 图层, `string` 命令)](#转场命令) | `bool` | 应用转场命令 |

### 场景管理器
描述：场景管理，用于管理场景。
| 方法名 | 返回值 | 描述 |
|-----|------|------|
| [加载场景(`string` 场景路径)](#等待) |  `nil` | 加载场景 |

## 数据类型
### int2
类名：`int2`  
描述：2维整数坐标
属性
| 属性名 | 类型 | 描述 |
|-----|------|------|
| x | `int` | x坐标 |
| y | `int` | y坐标 |

### float2
类名：`float2`  
描述：2维浮点数坐标
属性
| 属性名 | 类型 | 描述 |
|-----|------|------|
| x | `float` | x坐标 |
| y | `float` | y坐标 |

### float3
类名：`float3`  
描述：3维浮点数坐标
属性
| 属性名 | 类型 | 描述 |
|-----|------|------|
| x | `float` | x坐标 |
| y | `float` | y坐标 |
| z | `float` | z坐标 |

### float4
类名：`float4`  
描述：4维浮点数坐标 
属性
| 属性名 | 类型 | 描述 |
|-----|------|------|
| x | `float` | x坐标 |
| y | `float` | y坐标 |
| z | `float` | z坐标 |
| w | `float` | w坐标 |

### quaternion
类名：`quaternion`  
描述：四元数
属性
| 属性名 | 类型 | 描述 |
|-----|------|------|
| x | `float` | x坐标 |
| y | `float` | y坐标 |
| z | `float` | z坐标 |
| w | `float` | w坐标 |

## 游戏角色组件
### GameActor
描述：游戏角色组件，用于表示游戏中的角色。

方法
| 方法名 | 返回值 | 描述 |
|-----|------|------|
| GetComponent(`string` 组件名) | `IComponent`| 获取组件 |
| AddComponent(`string` 组件名) | `IComponent`| 添加组件 |

属性
| 属性名 | 类型 | 描述 |
|-----|------|------|
| label | `string` | 角色名称 |
| visible | `bool` | 角色是否可见 |

### TransformComponent
描述：变换组件，用于表示游戏中的角色变换。

属性
| 属性名 | 类型 | 描述 |
|-----|------|------|
| location | `float3` | 位置 |
| rotation | `quaternion` | 旋转 |
| scale | `float3` | 缩放 |
| visible | `bool` | 角色是否可见 |

### SpriteRendererComponent
描述：精灵渲染组件，用于表示游戏中的角色渲染。

属性
| 属性名 | 类型 | 描述 |
|-----|------|------|
| color | `float4` | 颜色 |
| flip | `int2` | 翻转 |

### VideoPlayerComponent
描述：视频渲染组件，用于表示游戏中的视频渲染。

方法
| 方法名 | 返回值 | 描述 |
|-----|------|------|
| Play() | `bool`| 播放视频 |
| Stop() | `nil`| 停止视频 |

属性
| 属性名 | 类型 | 描述 |
|-----|------|------|
| playOnAwake | `bool` | 是否在唤醒时播放 |
| loop | `bool` | 是否循环播放 |
| waitForFirstFrame | `bool` | 是否等待第一帧 |

### AudioSourceComponent
描述：音频渲染组件，用于表示游戏中的音频渲染。

方法
| 方法名 | 返回值 | 描述 |
|-----|------|------|
| Play() | `bool`| 播放音频 |
| Stop() | `nil`| 停止音频 |

属性
| 属性名 | 类型 | 描述 |
|-----|------|------|
| volume | `float` | 音量 |