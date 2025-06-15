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

I am a Ph.D. student (2020 - now) at State Key Laboratory of Information Engineering in Surveying, Mapping and Remote Sensing (LIESMARS), Wuhan University. I received B.S. degree from School of Electronic Information, Wuhan University, Wuhan, China, in 2020. I am now a member of EVA group, advised by [**Prof. Wei He**](https://prowdiy.github.io/weihe.github.io/). **I am currently focusing my research on disaster studies, exploring solutions through large vision-language models.**

# 🗞️ News

## One paper (outcome of 2024 IEEE WHISPERS Multi-Modal Semantic Segmentation Challenge) accepted to JSTAR (2025.06.15).

## ✈️✈️We (Ruoyao Xue, Jiepan Li, Zehui Wu, and Wei He) are delighted to inform you we have successfully secured the championship in the Mandarin Audio-Visual Speech Recognition Challenge held by the 19th IEEE International Conference Automatic Face and Gesture Recognition (2025.05.26, Clearwater,USA).

## ✈️✈️We (Yu Sheng, Jiepan Li, He Huang, Zhiwei Zhang, and Wei He) were awarded the Second Prize in the Land Surface Track of the 2nd Gaofen Earth Observation Application Technology Innovation Competition for the project 'Fine-Scale Crop Classification Using Gaofen Satellite Data' (第二届高分对地观测应用技术创新大赛陆表赛道——基于高分卫星的农作物精细识别技术赛题二等奖, 2025.04.25).

## ✈️✈️We(Jiepan Li, He Huang, Yu Sheng, Yujun Guo, Wei He) are delighted to inform you we have successfully secured the championship in the second track of [**2025 IEEE GRSS Data Fusion Contest**](https://www.grss-ieee.org/technical-committees/image-analysis-and-data-fusion/?tab=data-fusion-contest) (2025.03.28).
<img src='images/2025DFC.jpg' alt="sym" width="100%">

## We (Jiepan Li, He Huang, Yu Xia) were awarded the champion certificate in the Multi-Modal Semantic Challenge organized by IEEE Whisper (2024.12.11, Finland).
## One paper accepted to TGRS (2024.12.02).
## One paper accepted to ISPRS (2024.11.22).
## One paper accepted to IEEE Whisper 2024 (Oral).

## ✈️✈️We (Jiepan Li, He Huang, Yu Xia) are delighted to inform you we have successfully secured the championship in the [**2024 IEEE Whispers Multimodal Semantic Segmentation Challenge**](https://www.ieee-whispers.com/multimodal-semantic-segmentation-challenge/).

## 🎇🎇I attended the IGARSS2024 conference in Athens, Greece from July 7, 2024 to July 13, 2024.
## 🎇🎇I attended the CVPR 2024 conference in Seattle, USA from June 15, 2024 to June 22, 2024.

## Two papers accepted to IGARSS 2024 (Oral).
## One co-author paper accepted to CVPR 2024 (Highlight).
## One paper accepted to TGRS.

## ✈️✈️We (Jiepan Li, He Huang, Wei He, Hongyan Zhang, Liangpei Zhang) are delighted to inform you we have successfully secured the double track championship in the [**2024 IEEE GRSS Data Fusion Contest**](https://codalab.lisn.upsaclay.fr/competitions/16702).
<img src='images/DFC.png' alt="sym" width="100%">

## ❤️💻 Our Remote Sensing Intelligent Interpretation Platform System will be online soon!
<video width="1000" playsinline="" autoplay="true" controls="" controlslist="nodownload">  <source src="images/rs_platform.mp4" /></video>

# 📝 Publications 

## General Visual Interpretation

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Difference-Aware Decoder(DAD)</div><img src='images/owinca.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Towards Complex Backgrounds: A Unified Difference-Aware Decoder for Binary Segmentation](https://arxiv.org/abs/2210.15156)

**Jiepan Li**, Wei He, Fangxiao Lu, Hongyan Zhang 

Submitted to IEEE Transactions on Circuits and Systems for Video Technology (TCSVT)

[**Code**](https://github.com/Henryjiepanli/DAD)
- **Introduction**: A new unified dual-branch decoder paradigm named the difference-aware decoder is proposed in this paper to explore the difference between the foreground and the background and separate the objects of interest in optical images.
- **Key words**: Binary segmentation, camouflaged object detection, salient object detection, polyp segmentation, mirror detection.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Progressive Uncertainty-Guided Network(PUGNet)</div><img src='images/PUGNet.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Progressive Uncertainty-Guided Network for Binary Segmentation in High-Resolution Remote Sensing Imagery](https://arxiv.org/abs/2210.15156)

**Jiepan Li**, Wei He

Submitted to IEEE Transactions on Image Processing (TIP)

[**Code**](https://github.com/Henryjiepanli/PU_RS)
- **Introduction**: The core insight of PUGNet is a novel tripartite decomposition of uncertainty into three complementary components: foreground uncertainty (arising from ambiguous object regions), background uncertainty (linked to cluttered or low-contrast nontarget areas), and contextual uncertainty (centered around object boundaries and transition zones).
- **Key words**: —Remote sensing, building extraction, building change detection, cropland extraction, and uncertainty
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Building Extraction</div><img src='images/UANet_visual.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[UANet: an Uncertainty-Aware Network for Building Extraction from Remote Sensing Images](https://ieeexplore.ieee.org/document/10418227)

 **Jiepan Li**, Wei He, Weinan Cao, Liangpei Zhang, Hongyan Zhang 

IEEE Transactions on Geoscience and Remote Sensing (**TGRS**), 2024. (**SCI Q1 TOP, IF=7.5**) (**ESI Highly Cited Paper**)

[**Code**](https://github.com/Henryjiepanli/Uncertainty-aware-Network)
- **Introduction**: In this paper, we realize the importance of uncertain prediction and propose a novel and straightforward Uncertainty-Aware Network (UANet) to alleviate this problem.
- **Key words**: Remote sensing, building extraction, uncertainty-aware
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Farmland Mapping</div><img src='images/CROP.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[A Comprehensive Deep-Learning Framework for Fine-Grained Farmland Mapping from High-Resolution Images](https://ieeexplore.ieee.org/document/10793088)

**Jiepan Li**, Yipan Wei, Tiangao Wei, Wei He.
 
IEEE Transactions on Geoscience and Remote Sensing (**TGRS**), 2025. (**SCI Q1 TOP, IF=7.5**) 

[**Code**](https://github.com/Henryjiepanli/DBBANet) [**Data**](https://pan.baidu.com/s/1kdGAowJ2Dcqyn-dUQWLHJA?pwd=FGFD)
- **Introduction**: A comprehensive farmland mapping framework that integrates advanced data, methodology, and cartographic techniques.
- **Key words**: Farmland extraction, remote sensing, dual-branch, semantic segmentation
</div>
</div>

## Multi-Temporal/Modal Visual Interpretation

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Building Change Detection</div><img src='images/UA-BCD.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Overcoming the Uncertainty Challenges in Detecting Building Changes from Remote Sensing Images](https://www.sciencedirect.com/science/article/pii/S092427162400426X)

**Jiepan Li**, Wei He, Zhuohong Li, Yujun Guo, Hongyan Zhang
 
ISPRS Journal of Photogrammetry and Remote Sensing (**ISPRS**), 2025. (**SCI Q1 TOP, IF=10.6**) [**Code**](https://github.com/Henryjiepanli/UA-BCD)

- **Introduction**: To address the uncertainty challenges in building change detection, we present an Uncertainty-Aware Building Change Detection (UA-BCD) framework. In addition to conducting extensive experiments on five publicly available building change datasets, we have also implemented an application in Dongxihu District, Wuhan, China, which confirms the outstanding performance of the proposed method in large-scale building change detection.
- **Key words**: Building change detection, remote sensing, uncertainty-related theory, building change detection mapping
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Building Damage Mapping</div><img src='images/BGLU.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Building-Guided Pseudo-Label Learning for Cross-Modal Building Damage Mapping](http://arxiv.org/abs/2505.04941)

**Jiepan Li**, He Huang. Yu Sheng, Yujun Guo, Wei He
 
IEEE International Geoscience and Remote Sensing Symposium (IGARSS), 2025 (Oral) [**Code**](https://github.com/Henryjiepanli/Building-Guided-Pseudo-Label-Learning-for-Cross-Modal-Building-Damage-Mapping)

- **Introduction**: This study proposes a novel Building-Guided Pseudo-Label Learning Framework to address the challenges of mapping building damage from pre-disaster optical and post-disaster SAR images. Experimental results on the 2025 IEEE GRSS Data Fusion Contest dataset demonstrate the effectiveness of our approach, which achieved the highest mIoU score (54.28%) and **secured first place in the competition**. 
- **Key words**: Building damage mapping, cross-modal, change detection
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Landcover Mapping(Sentinel-1 &2)</div><img src='images/whispers_jstar.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Multimodal Semantic Segmentation in Yangtze River Economic Belt: Outcome of the 2024 IEEE WHISPERS MMSeg-YREB Challenge](https://ieeexplore.ieee.org/document/10641026)

**Jiepan Li**, He Huang, Yu Xia, Xian Xu, Yingxin Wu, Qi Guo, Yinhe Liu, Yanfei Zhong, Senior Member, IEEE,
Jeongho Min, Sungbin Son, Hyeonjin Kim, Jaejun Yoo, Gemine Vivone, Senior Member, IEEE, Chenyu Li, Wei
He, Senior Member, IEEE, Renwei Dian, Hao Liu, Haipeng Wang, Kan Wei, A. K. Qin, Senior Member, IEEE,
Naoto Yokoya, Member, IEEE, Shutao Li, Fellow, IEEE, Jocelyn Chanussot, Fellow, IEEE, and Danfeng
Hong, Senior Member, IEEE
 
IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing (**JSTARS**), 2025.

- **Introduction**:  In this paper, we provide a comprehensive overview of the MMSeg-YREB challenge, detailing the methodological designs of the Top 3 solutions and making available an open-source codebase for their implementations, along with the multimodal semantic segmentation dataset. 
- **Key words**: Artificial Intelligence, Benchmark, Challenge, Deep Learning, Land Cover, Large-Scale, Multimodal, Remote Sensing, Semantic Segmentation, WHISPERS, YREB.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Flood Mapping(Sentinel-1 &2)</div><img src='images/dfc_2024_jstar.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Rapid Flood Mapping: Outcome of the 2024 IEEE GRSS Data Fusion Contest](https://ieeexplore.ieee.org/document/10641026)

 **Jiepan Li**, He Huang, Wei~He,Hongyan~Zhang, Liangpei~Zhang, Ting~Liu, Mengke~Yuan, Chaoran~Lu, Kaixuan~Lu, Baochai~Peng, Heyang~Duan, Mengya~Li, Pan~Zhang, Tao~Wang, Tongkui~Liao, Yansheng~Li, Bo~Dang, Fanyi~Wei, Jieyi~Tan, Yangjie~Lin, Claudio~Persello, Saurabh~Prasad, Gemine~Vivone, Vincent~Lonjou, Frédéric~Bretar, Raquel~Rodriguez Suquet,Pauline~Guntzburger, 
 Vincent~Poulain, Jacqueline~Le~Moigne, Benjamin~Smith, Sujay~Kumar, Thomas~Huang, Sophie~Ricci,Thanh~Huy~Nguyen, Andrea~Piacentini
 
Submitted to IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing (**JSTARS**), 2025.

- **Introduction**:  This article presents the scientific outcomes of the 2024 Data Fusion Contest (DFC24) organized by the Image Analysis and Data Fusion Technical Committee (IADF TC) of the IEEE Geoscience and Remote Sensing Society (GRSS), the Space for Climate Observatory (SCO), the Centre national d’etudes spatiales (CNES), the National Aeronautics and Space Administration (NASA), and the Centre Européen de Recherche et de Formation Avancée et Calcul Scientifique (CERFACS).
- **Key words**: Transformers, convolutional neural networks, deep learning, data fusion, flood mapping, remote sensing.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Landcover Mapping(Sentinel-1 &2)</div><img src='images/whisper.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Fusion of Multiple Models with Multi-Modal Datasets: Land Cover Mapping in the Yangtze River Economic Belt](https://ieeexplore.ieee.org/document/10876418)

 **Jiepan Li**, He Huang, Yu Xia
 
IEEE Workshop on Hyperspectral Image and Signal Processing (WHISPERS), 2024 (Oral)

- **Introduction**:  The 2024 IEEE Whisper contest, MMSeg-YREB, aims to integrate multi-modal data, specifically Sentinel-1 and Sentinel-2, to conduct a detailed analysis of land cover types
and their changes within the Yangtze River Economic Belt.
- **Key words**: deep learning, land cover
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Flood Extraction(Sentinel-1)</div><img src='images/IGARSS_track_1.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Overcoming the Uncertainty Challenges in Flood Rapid Mapping with SAR Data](https://ieeexplore.ieee.org/document/10641026)

 He Huang, **Jiepan Li**, Wei He, Hongyan Zhang, Liangpei Zhang
 
IEEE International Geoscience and Remote Sensing Symposium (IGARSS), 2024 (Oral)

- **Introduction**:  The 2024 IEEE GRSS Data Fusion Contest Track 1 is centered on leveraging multi-source remote sensing data, particularly synthetic aperture radar (SAR) data,
 to classify flood and non-flood areas. In this contest, we acknowledge the significance of managing uncertain predictions and present an efficient Uncertainty-Aware Fusion Network (UAFNet).
- **Key words**: SAR, flood mapping, semantic segmentation, uncertainty-based theory
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Flood Extraction(Sentinel-2)</div><img src='images/IGARSS_track_2.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Overcoming the Uncertainty Challenges in Flood Rapid Mapping with Multi-Source Optical Data](https://ieeexplore.ieee.org/document/10641074)

**Jiepan Li**, He Huang, Wei He, Hongyan Zhang, Liangpei Zhang
 
IEEE International Geoscience and Remote Sensing Symposium (IGARSS), 2024 (Oral)

- **Introduction**: The 2024 IEEE GRSS Data Fusion Contest Track 2 aims to pioneer innovative algorithms for accurate flood extraction using multi-source optical remote sensing (RS) data.
In this paper, we propose an Uncertainty-aware Detail-Preserving Network (UADPNet) for rapid flood mapping of multi-source optical data.
- **Key words**: multi-source optical data, flood mapping, semantic segmentation, uncertainty-based theory
</div>
</div>


# 🧑‍🏫 Supervised Research

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">1.Change Detection</div><img src='images/MTCNet.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[MLCNet: Multi-Task Level-Specific Constraint Network for Building Change Detection](https://ieeexplore.ieee.org/abstract/document/10562241)

Taoyuan Liu, **Jiepan Li**, Fangxiao Lu, Minghao Tang, and Guangyi Yang

IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing (**JSTARS**), 2024. (**SCI Q2 TOP, IF=4.715**)
- **Introduction**: We propose a Multi-Task Level-Specific Constraint Network, named MLCNet, which addresses the issues by optimizing the advantages of features at different levels.
- **Key words**: Change detection (CD), hierarchical features, multi-task learning, deep supervision, level-specific constraint
</div>
</div>

# 🎖 Contests
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">19th IEEE International Conference Automatic Face and Gesture Recognition</div><img src='images/cysb.png' alt="sym"></div></div>
<div class='paper-box-text' markdown="1">

[We ranked first in the Mandarin Audio-Visual Speech Recognition Challenge（champion）](https://codalab.lisn.upsaclay.fr/competitions/21609)

- **Introduction:** we propose the Context-Enhanced Visual Speech Recognition Network (ConVSR), specifically designed to improve Chinese lip reading. ConVSR incorporates intermediate connectionist temporal classification (inter CTC) residual modules to provide enhanced CTC supervision, improving the model’s contextual comprehension. Additionally, a Bi-Transformer Decoder is employed to simultaneously capture both past and future contextual information, thereby strengthening the model’s semantic understanding..

- **Key words:** Chinese Lip reading
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">2025 IEEE GRSS Data Fusion Contest Track 2</div><img src='images/dfc25track2.jpg' alt="sym"></div></div>
<div class='paper-box-text' markdown="1">

[We ranked first in the track 2 of the Data Fusion Contest 2025（champion）](https://www.grss-ieee.org/technical-committees/image-analysis-and-data-fusion/?tab=data-fusion-contest)

- **Introduction:** This track aims to develop methods for assessing building damage using bi-temporal multimodal images. The training data contain optical images from before the disaster and SAR images after the disaster, all at submeter resolution, labeled with four classes: background, intact, damaged, and destroyed buildings. Mapping building damage from multimodal image pairs presents unique challenges due to the different characteristics of optical and SAR imagery.

- **Key words:** SAR, Optical, Building damage mapping
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">2024 IEEE Whispers Multimodal Semantic Segmentation Challenge</div><img src='images/whisper_certificate.png' alt="sym"></div></div>
<div class='paper-box-text' markdown="1">

[We ranked first in the 2024 IEEE Whispers Multimodal Semantic Segmentation Challenge（champion）](https://www.ieee-whispers.com/multimodal-semantic-segmentation-challenge/)

- **Introduction:** This contest focuses on land cover mapping in the Yangtze River Economic Belt using multi-source remote sensing data from Sentinel-1 and Sentinel-2.

- **Key words:** Sentinel-1, Sentinel-2, Landcover mapping, Multi-Modal data
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">2024 IEEE GRSS Data Fusion Contest Track 1</div><img src='images/Track1.png' alt="sym"></div></div>
<div class='paper-box-text' markdown="1">

[We ranked first in the track 1 of the Data Fusion Contest 2024（champion）](https://news.whu.edu.cn/info/1015/454817.htm)

- **Introduction:** This track focuses on mapping the water surface from Copernicus Sentinel-1 SAR imagery. The goal is to accurately determine water and non-water pixels in these event areas by fusing data from one or more of the provided data sources.

- **Key words:** SAR, Flood rapid mapping
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">2024 IEEE GRSS Data Fusion Contest Track 2</div><img src='images/Track2.png' alt="sym"></div></div>
<div class='paper-box-text' markdown="1">

[We ranked first in the track 2 of the Data Fusion Contest 2024（champion）](https://news.whu.edu.cn/info/1015/454817.htm)

- **Introduction:** Track-2 focuses on mapping the water surface from Copernicus Sentinel-2 and Landsat optical imageries. 
- **Key words:** Multi-spectral data, Flood rapid mapping
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Gaofen Earth Observation Application Technology Innovation Competition</div><img src='images/cx_second.png' alt="sym"></div></div>
<div class='paper-box-text' markdown="1">

[We were awarded the Second Prize in the Land Surface Track of the 2nd Gaofen Earth Observation Application Technology Innovation Competition for the project 'Fine-Scale Crop Classification Using Gaofen Satellite Data' (第二届高分对地观测应用技术创新大赛陆表赛道——基于高分卫星的农作物精细识别技术赛题二等奖)](https://news.whu.edu.cn/info/1015/454817.htm)

- **Introduction:** The goal of this competition is to develop a crop extraction model based on high-resolution multispectral and hyperspectral satellite imagery for precise crop classification. The model will deliver faster and more accurate cultivated land survey results, supporting land census efforts and monitoring of "non-agriculturalization" and "non-grainization.". 
- **Key words:** Multi-spectral data, crop extraction, deep learning
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge"> 2024 ISPRS Contest on Intelligent Interpretation for Multi-modal Remote Sensing Application</div><img src='images/微信图片_20240514152502.jpg' alt="sym"></div></div>
<div class='paper-box-text' markdown="1">

[Contest on Intelligent Interpretation for Multi-modal Remote Sensing Application (**Rank the Fourth Place**)](https://mp.weixin.qq.com/s/NrWI8nsmhiD-4PJ0XzSE4g)

- **Introduction:** Data：GF、ZF-3 Remote sensing imagery，Resolution: 2m. It mainly covers agricultural land and construction land within China's mainland territory; the types of changes include: buildings (structures), earthmoving, reservoir and pond water surfaces, highways, railways, park green spaces, and backgrounds.

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
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">1.Building Function</div><img src='images/building_function.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Identifying every building's function in large-scale urban areas with multi-modality remote-sensing data](https://www.researchgate.net/publication/380458348_Identifying_every_building's_function_in_large-scale_urban_areas_with_multi-modality_remote-sensing_data)

Zhuohong Li, Wei He, **Jiepan Li**, Hongyan Zhang

IEEE International Geoscience and Remote Sensing Symposium (IGARSS), 2024 (Oral)

[**Code**](https://github.com/LiZhuoHong/BuildingMap)
- **Introduction**: In this study, we proposed a semi-supervised framework to identify every building’s function in large-scale urban areas with multi-modality remote-sensing data.
- **Key words**: Building function, multi-modality data, semi-supervised, large-scale mapping
</div>
</div>
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">2.Landcover mapping</div><img src='images/CVPR.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Learning Without Exact Guidance: Updating Large-scale High-resolution Land Cover Maps from Low-resolution Historical Labels](https://arxiv.org/html/2403.02746v1)

Zhuohong Li, Wei He, **Jiepan Li**, Fangxiao Lu, Hongyan Zhang

Conference on Computer Vision and Pattern Recognition (CVPR2024, Highlight) (**CCF-A**)

[**Code**](https://github.com/Henryjiepanli/DAD)
- **Introduction**: In this paper, we propose an efficient, weakly supervised framework (Paraformer) to guide large-scale HR land-cover mapping with easy-access historical land-cover data of low resolution (LR).
- **Key words**: Remote sensing, Landcover mapping, Weakly supervised, Semantic segmentation.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">3.Change Detection: Change Guiding Network(CGNet)</div><img src='images/CGNet.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Change Guiding Network: Incorporating Change Prior to Guide Change Detection in Remote Sensing Imagery](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10234560)

C. Han, C. Wu, H. Guo, M. Hu, **Jiepan Li**, and H. Chen

IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing (**JSTARS**), 2023. (**SCI Q2 TOP, IF=4.715**)

[**Code**](https://github.com/ChengxiHAN/CGNet-CD)
- **Introduction**: Our proposed hange guide module can effectively capture the long-distance dependency among pixels and overcomes the problem of the insufficient receptive field.
- **Key words**: Remote sensing, Change detection, Attention mechanism
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">4.Semi-supervised Change Detection</div><img src='images/C2F-SemiCD.png' alt="sym" width="100%"></div></div>
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
- **Journal Reviewer**: IEEE Transactions on Geoscience and Remote Sensing (TGRS), IEEE Transactions on Circuits and Systems for Video Technology (TCSVT), Discover Artificial Intelligence, Scientific Reports, Big Earth Data, IEEE Access, Smart Agricultural Technology.

# 📖 Educations
- *2020.06 - 2023.07 (now)*, State Key Laboratory of Information Engineering in Surveying,
  Mapping and Remote Sensing (LIESMARS), Wuhan University. 
- *2016.09 - 2020.06*, School of Electronic Information, Wuhan University. 
