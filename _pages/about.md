---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am a Ph.D. student (2020 - now) at State Key Laboratory of Information Engineering in Surveying, Mapping and Remote Sensing (LIESMARS), Wuhan University. I received B.S. degree from School of Electronic Information, Wuhan University, Wuhan, China, in 2016. I am now a member of EVA group, advised by [**Prof. Wei He**](https://prowdiy.github.io/weihe.github.io/).

# ✈️✈️We are delighted to inform you we have successfully secured the double track championship in the [**2024 IEEE GRSS Data Fusion Contest**](https://codalab.lisn.upsaclay.fr/competitions/16702).
<img src='images/DFC.png' alt="sym" width="100%">

# ❤️💻 Our Remote Sensing Intelligent Interpretation Platform System will be online soon!
<video width="1000" playsinline autoplay="true" controls controlslist="nodownload">  <source src="images/WeChat_20240124230813.mp4"></video>

# 📝 Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">1.Binary Segmentation: Difference-Aware Decoder(DAD)</div><img src='images/DAD.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Towards Complex Backgrounds: A Unified Difference-Aware Decoder for Binary Segmentation](https://arxiv.org/abs/2210.15156)

**Jiepan Li**, Wei He, Hongyan Zhang 

Submitted to IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)

[**Code**](https://github.com/Henryjiepanli/DAD)
- **Introduction**: A new unified dual-branch decoder paradigm named the difference-aware decoder is proposed in this paper to explore the difference between the foreground and the background and separate the objects of interest in optical images.
- **Key words**: Binary segmentation, camouflaged object detection, salient object detection, polyp segmentation, mirror detection.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">2.Building Extraction: Uncertainty-Aware Network(UANet)</div><img src='images/UANet_visual.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[UANet: an Uncertainty-Aware Network for Building Extraction from Remote Sensing Images](https://ieeexplore.ieee.org/document/10418227)

 **Jiepan Li**, Wei He, Weinan Cao, Liangpei Zhang, Hongyan Zhang 

IEEE Transactions on Geoscience and Remote Sensing (**TGRS**), 2024. (**SCI Q1 TOP, IF=8.2**)

[**Code**](https://github.com/Henryjiepanli/Uncertainty-aware-Network)
- **Introduction**: In this paper, we realize the importance of uncertain prediction and propose a novel and straightforward Uncertainty-Aware Network (UANet) to alleviate this problem.
- **Key words**: Remote sensing, building extraction, uncertainty-aware
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">3.Attention: Cross-level Attention with Overlapped Windows</div><img src='images/framework.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Cross-level Attention with Overlapped Windows for Camouflaged Object Detection](https://arxiv.org/pdf/2311.16618.pdf)

 **Jiepan Li**, Fangxiao Lu, Nan Xue, Zhuohong Li, Hongyan Zhang, Wei He 

[**Code**](https://github.com/Henryjiepanli/Uncertainty-aware-Network)
- **Introduction**:  In this paper, we propose an overlapped window cross-level attention (OWinCA) to achieve the low-level feature enhancement guided by the highest-level features. 
- **Key words**: Camouflaged Object Detection, Attention Mechanism
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">4.Flood Extraction with SAR Data</div><img src='images/Track1.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[OVERCOMING THEUNCERTAINTY CHALLENGES IN FLOOD RAPID MAPPING WITH SAR DATA](https://arxiv.org/pdf/2311.16618.pdf)

 He Huang, **Jiepan Li**, Wei He, Hongyan Zhang, Liangpei Zhang
 
IEEE International Geoscience and Remote Sensing Symposium (IGARSS), 2024 (Oral)

- **Introduction**:  The 2024 IEEE GRSS Data Fusion Contest Track 1 is centered on leveraging multi-source remote sensing data, particularly synthetic aperture radar (SAR) data,
 to classify flood and non-flood areas. In this contest, we acknowledge the significance of managing uncertain predictions and present an efficient Uncertainty-Aware Fusion Network (UAFNet)
- **Key words**: SAR, flood mapping, semantic segmentation, uncertainty-based theory
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">5.Flood Extraction with Optical Data</div><img src='images/track2.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[OVERCOMING THEUNCERTAINTY CHALLENGES IN FLOOD RAPID MAPPING WITH MULTI-SOURCE OPTICAL DATA](https://arxiv.org/pdf/2311.16618.pdf)

**Jiepan Li**, He Huang, Wei He, Hongyan Zhang, Liangpei Zhang
 
IEEE International Geoscience and Remote Sensing Symposium (IGARSS), 2024 (Oral)

- **Introduction**: The 2024 IEEE GRSS Data Fusion Contest Track 2 aims to pioneer innovative algorithms for accurate flood extraction using multi-source optical remote sensing (RS) data.
In this paper, we propose an Uncertainty-aware Detail-Preserving Network (UADPNet) for rapid flood mapping of multi-source optical data.
- **Key words**: multi-source optical data, flood mapping, semantic segmentation, uncertainty-based theory
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">6.Binary Segmentation</div><img src='images/pugnet.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Progressive Uncertainty Guided Network for Binary Segmentation](https://arxiv.org/pdf/2311.16618.pdf)

**Jiepan Li**, Wei He, Hongyan Zhang, Liangpei Zhang
 
Submitted to IEEE Transactions on Image Processing (TIP) 

- **Introduction**: We introduce two types of uncertainty from the cognitive and contextual perspectives, and propose the Progressive Uncertainty Guided Network (PUGNet) for binary segmentation. 
- **Key words**: Salient object detection, camouflaged object detection, building extraction, and uncertainty-aware theory
</div>
</div>

# 🧑‍🏫 Supervised Undergraduate Students' Research

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">1.Farmland Mapping</div><img src='images/farmland_framework.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[A Comprehensive Deep-Learning Framework for Fine-Grained Farmland Mapping from High-Resolution Images](https://arxiv.org/pdf/2311.16618.pdf)

Yipan Wei, **Jiepan Li**, Wei He. (Equal Contribution)
 
Submitted to IEEE Transactions on Geoscience and Remote Sensing (**TGRS**)
- **Introduction**: To meet the urgent need for efficient farmland extraction and overcome existing technical challenges, we have developed a comprehensive farmland mapping framework that integrates advanced data, methodology, and cartographic techniques.
- **Key words**: Farmland extraction, remote sensing, dual-branch, semantic segmentation
- **Description**: Wuhan University, School of Computer Science and Technology, Third-Year Undergraduate Student.
</div>
</div>

# 🎖 Contests
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">2024 IEEE GRSS Data Fusion Contest Track 1</div><img src='images/DFC_track1.png' alt="sym"></div></div>
<div class='paper-box-text' markdown="1">

[We ranked first in the track 1 of the Data Fusion Contest 2024（champion）](https://news.whu.edu.cn/info/1015/454817.htm)

- **Introduction:** This track focuses on mapping the water surface from Copernicus Sentinel-1 SAR imagery. The goal is to accurately determine water and non-water pixels in these event areas by fusing data from one or more of the provided data sources.

- **Key words:** SAR, Flood rapid mapping
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">2024 IEEE GRSS Data Fusion Contest Track 2</div><img src='images/DFC_track2.png' alt="sym"></div></div>
<div class='paper-box-text' markdown="1">

[We ranked first in the track 2 of the Data Fusion Contest 2024（champion）](https://news.whu.edu.cn/info/1015/454817.htm)

- **Introduction:** Track-2 focuses on mapping the water surface from Copernicus Sentinel-2 and Landsat optical imageries. 
- **Key words:** Multi-spectral data, Flood rapid mapping
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge"> 2024 ISPRS第一技术委员会多模态遥感应用算法智能解译大赛</div><img src='images/微信图片_20240514152502.jpg' alt="sym"></div></div>
<div class='paper-box-text' markdown="1">

[基于高分辨率可见光图像的感兴趣区域内部变化智能检测**第四名**](https://mp.weixin.qq.com/s/NrWI8nsmhiD-4PJ0XzSE4g)

- **Introduction:** 数据：高分系列、资源3号系列卫星数据，分辨率2米，主要覆盖我国陆域范围内农用地及建设用地；变化类型包括：建（构）筑物、推堆土、库塘水面、公路、铁路、公园绿地和背景

- **Key words:** Change Detection
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">第五届“中科星图杯”国际高分遥感图像解译大赛</div><img src='images/gfbs.png' alt="sym"></div></div>
<div class='paper-box-text' markdown="1">

[高分辨率SAR图像中近海养殖场分割赛道决赛第六名](https://mp.weixin.qq.com/s/NrWI8nsmhiD-4PJ0XzSE4g)

- **Introduction:** We propose an efficient solution to achieve the farm segmentation from SAR data.

- **Key words:** SAR, Multi-model fusion, OHEM
</div>
</div>

# 📝Co-authored Publications 
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">1.Landcover mapping</div><img src='images/CVPR.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Learning Without Exact Guidance: Updating Large-scale High-resolution Land Cover Maps from Low-resolution Historical Labels](https://arxiv.org/html/2403.02746v1)

Zhuohong Li, Wei He, **Jiepan Li**, Fangxiao Lu, Hongyan Zhang

Conference on Computer Vision and Pattern Recognition (CVPR2024) (**CCF-A**)

[**Code**](https://github.com/Henryjiepanli/DAD)
- **Introduction**: In this paper, we propose an efficient, weakly supervised framework (Paraformer) to guide large-scale HR land-cover mapping with easy-access historical land-cover data of low resolution (LR).
- **Key words**: Remote sensing, Landcover mapping, Weakly supervised, Semantic segmentation.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">2.Change Detection: Change Guiding Network(CGNet)</div><img src='images/CGNet.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Change Guiding Network: Incorporating Change Prior to Guide Change Detection in Remote Sensing Imagery](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10234560)

C. Han, C. Wu, H. Guo, M. Hu, **Jiepan Li**, and H. Chen

IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing (**JSTARS**), 2023. (**SCI Q2 TOP, IF=4.715**)

[**Code**](https://github.com/ChengxiHAN/CGNet-CD)
- **Introduction**: Our proposed hange guide module can effectively capture the long-distance dependency among pixels and overcomes the problem of the insufficient receptive field.
- **Key words**: Remote sensing, Change detection, Attention mechanism
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">3.Semi-supervised Change Detection</div><img src='images/C2F-SemiCD.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[C2F-SemiCD: A coarse-to-fine semi-supervised change detection method based on consistency regularization in High-Resolution Remote-Sensing Images](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10445496)

C. Han, C. Wu, M. Hu, **Jiepan Li**, and H. Chen

IEEE Transactions on Geoscience and Remote Sensing (**TGRS**), 2024. (**SCI Q1 TOP, IF=8.2**)

[**Code**](https://github.com/ChengxiHAN/C2F-SemiCD-and-C2FNet)
- **Introduction**:  we propose a coarse-to-fine semi-supervised change detection method based on consistency regularization (C2F-SemiCD), which includes a coarse-to-fine change detection network with a multi-scale attention mechanism(C2FNet) and a semi-supervised update method. 
- **Key words**: Remote sensing, Change detection, Semi-supervised
</div>
</div>

<!-- [1. Change Guiding Network: Incorporating Change Prior to Guide Change Detection in Remote Sensing Imagery](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10234560)

C. Han, C. Wu, H. Guo, M. Hu, **Jiepan Li**, and H. Chen

IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing (**JSTARS**), 2023. (**SCI Q2 TOP, IF=4.715**)

[2. C2F-SemiCD: A coarse-to-fine semi-supervised change detection method based on consistency regularization in High-Resolution Remote-Sensing Images](https://ieeexplore.ieee.org/document/10445496)

C. Han, C. Wu, M. Hu, **Jiepan Li**, and H. Chen

IEEE Transactions on Geoscience and Remote Sensing (**TGRS**), 2024. (**SCI Q1 TOP, IF=8.2**)

[3. Learning Without Exact Guidance: Updating Large-scale High-resolution Land Cover Maps from Low-resolution Historical Labels](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10234560)

Zhuohong Li, Wei He, **Jiepan Li**, Fangxiao Lu, Hongyan Zhang

CVPR2024 (**CCF-A**) -->


# 🐅Academic Service
- **Journal Reviewer**: IEEE Transactions on Geoscience and Remote Sensing (TGRS), IEEE Transactions on Circuits and Systems for Video Technology (TCSVT)

# 📖 Educations
- *2020.06 - 2023.07 (now)*, State Key Laboratory of Information Engineering in Surveying,
  Mapping and Remote Sensing (LIESMARS), Wuhan University. 
- *2016.09 - 2020.06*, School of Electronic Information, Wuhan University. 
