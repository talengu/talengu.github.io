---
title: Kinect开发
date: 2017-05-22 16:00:04
categories:
  - 计算机视觉
tags:
  - Kinect
  - Opencv
comments: true
---

> 概要：
> Kinect SDK V2.0重点记录

<!-- more -->

## 微软官方Reference
[Kinect for Windows C++ Reference](https://msdn.microsoft.com/en-us/library/hh855364.aspx)

## CameraSpacePoint
A 3D location in camera space.

### defined
```c++
typedef struct _CameraSpacePoint {
    float X;
    float Y;
    float Z;
} CameraSpacePoint;

```
### Members
| Members     |      |
| :---: | :------------- |
| X | component in camera space. |
| Y | component in camera space. |
| Z | component in camera space. |

### Remarks
Camera space refers to the 3D coordinate system used by Kinect. The coordinate system is defined as follows:
- The origin (x=0, y=0, z=0) is located at the center of the IR sensor on Kinect
- X grows to the sensor’s left
- Y grows up (note that this direction is based on the sensor’s tilt)
- Z grows out in the direction the sensor is facing
- 1 unit = 1 meter


## MapColorFrameToCameraSpace Method
[ICoordinateMapper](https://msdn.microsoft.com/en-us/library/microsoft.kinect.kinect.icoordinatemapper_methods.aspx)->[MapColorFrameToCameraSpace Method](https://msdn.microsoft.com/en-us/library/microsoft.kinect.kinect.icoordinatemapper.mapcolorframetocameraspace.aspx)

Uses the color frame data to map the entire frame from color space to camera space.

### Syntax
```c++
public:
HRESULT MapColorFrameToCameraSpace(
         UINT depthDataPointCount,
         const UINT16 *depthFrameData,
         UINT cameraPointCount,
         CameraSpacePoint *cameraSpacePoints
)

```
### Parameters
| Parameters            |  Type  ||
| :--------: | :----: |:----------------------- |
| depthDataPointCount   | UINT   | The number of depth data points. |
| depthFrameData        | UINT16 | [in] The full image data from a depth frame. |
| cameraPointCount      | UINT   | The number of camera points.|
| cameraSpacePoints     | CameraSpacePoint | [out] The array of mapped camera points that will be filled. |
| Return value          | HRESULT | Returns S_OK if successful; otherwise, returns a failure code.|

### Remarks
The cameraPoints array should be the same size of the number of color frame pixels. 1920x1080

## IDepthFrame::AccessUnderlyingBuffer Method
Gets a pointer to the depth frame data.  [link](https://msdn.microsoft.com/en-us/library/microsoft.kinect.kinect.idepthframe.accessunderlyingbuffer.aspx)

### Syntax
```c++
public:
HRESULT AccessUnderlyingBuffer(
         UINT *capacity,
         UINT16 **buffer
)

```

### Parameters
| Parameters      | Type    | |
| :-------------: | :------:| :-------------------------------- |
| capacity        | UINT    | [out] When this method returns, contains the size of the frame data buffer in bytes. |
| buffer          | UINT16  | [out] When this method returns, contains the pointer to the depth frame data. |
| Return value    | HRESULT | Returns S_OK if successful; otherwise, returns a failure code. |

### Remarks
The capcity is not size in bytes, it is the count of UINT16.

```c++
*(((DWORD *)(m_pDepthRGBX))+i) = *(pBuffer+i);

```
