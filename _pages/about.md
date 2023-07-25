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

# 📝 Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">1.Binary Segmentation: Difference-Aware Decoder(DAD)</div><img src='images/DAD.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Towards Complex Backgrounds: A Unified Difference-Aware Decoder for Binary Segmentation](https://arxiv.org/abs/2210.15156)

**Jiepan Li**, Wei He, Hongyan Zhang **(Role: First author)**

[**Code**](https://github.com/Henryjiepanli/DAD)
- **Introduction**: A new unified dual-branch decoder paradigm named the difference-aware decoder is proposed in this paper to explore the difference between the foreground and the background and separate the objects of interest in optical images.
- **Key words**: Binary segmentation, camouflaged object detection, salient object detection, polyp segmentation, mirror detection.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">2.Building Extraction: Uncertainty-Aware Network(UANet)</div><img src='images/UANet_visual.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Building Extraction from Remote Sensing Images via an Uncertainty-Aware Network](https://arxiv.org/pdf/2307.12309.pdf)

Wei He, **Jiepan Li**, Weinan Cao, Liangpei Zhang, Hongyan Zhang **(Role: Corresponding author)**

[**Code**](https://github.com/Henryjiepanli/Uncertainty-aware-Network)
- **Introduction**: In this paper, we realize the importance of uncertain prediction and propose a novel and straightforward Uncertainty-Aware Network (UANet) to alleviate this problem.
- **Key words**: Remote sensing, building extraction, uncertainty-aware
</div>
</div>

# 📝Co-authored Publications 
[Change Guiding Network: Incorporating Change Prior to Guide Change Detection in Remote Sensing Imagery](https://arxiv.org/abs/2210.15156)

C. Han,C. Wu, H. Guo , M. Hu. **J. Li**, and H. Chen

IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing (**JSTARS**), 2023. (**SCI Q3 TOP, IF=4.715**)

# 🎖 Contests
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">第五届“中科星图杯”国际高分遥感图像解译大赛</div><img src='images/gfbs.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[高分辨率SAR图像中近海养殖场分割赛道决赛第六名]([https://arxiv.org/abs/2210.15156](http://www.aircas.cas.cn/dtxw/hzjl/202303/t20230323_6713075.html))

**Jiepan Li**, Fangxiao Lu, Wei He, Hongyan Zhang

- **Introduction:** A SIFT-based stitching method was adopted to augment the original data set. Subsequently, a DA-ASPP network was trained with CE loss and Online Hard Example Mining (OHEM) strategy. Then the segmentation results were merged with the segmentation results of DeepLab v3. Finally, a post-processing method based on the removal of small holes and test time augmentation (TTA) was used to obtain the final segmentation results.

- **Key words:** SAR, Multi-model fusion, OHEM
</div>
</div>

# 📖 Educations
- *2020.06 - 2023.07 (now)*, State Key Laboratory of Information Engineering in Surveying, Mapping and Remote Sensing (LIESMARS), Wuhan University. 
- *2016.09 - 2020.06*, School of Electronic Information, Wuhan University. 
