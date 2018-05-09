<template>
  <div class="menu">
    <div class="subnav">
      <ul class="navbar">
        <li>
          <a data-act="subnav-click" data-val="{subnavClick:1}" data-state-val="{subnavId:1}" class="active" href="javascript:void(0);">正在热映</a>
        </li>
        <li>
          <a data-act="subnav-click" data-val="{subnavClick:2}" href="?showType=2">即将上映</a>
        </li>
        <li>
          <a data-act="subnav-click" data-val="{subnavClick:3}" href="?showType=3">经典影片</a>
        </li>
      </ul>
    </div>
    <div class="movies-channel">
      <div class="tags-panel">
        <ul class="tags-lines">
          <li class="tags-line" data-val="{tagTypeName:'cat'}">
            <div class="tags-title">类型 :</div>
            <ul class="tags">
              <li class="active" data-state-val="{ catTagName:'全部'}">
                <a data-act="tag-click" data-val="{TagName:'全部'}" href="javascript:void(0);" style="cursor: default">全部</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'爱情'}" href="?catId=3">爱情</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'喜剧'}" href="?catId=2">喜剧</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'动画'}" href="?catId=4">动画</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'剧情'}" href="?catId=1">剧情</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'恐怖'}" href="?catId=6">恐怖</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'惊悚'}" href="?catId=7">惊悚</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'科幻'}" href="?catId=10">科幻</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'动作'}" href="?catId=5">动作</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'悬疑'}" href="?catId=8">悬疑</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'犯罪'}" href="?catId=11">犯罪</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'冒险'}" href="?catId=9">冒险</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'战争'}" href="?catId=12">战争</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'奇幻'}" href="?catId=14">奇幻</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'运动'}" href="?catId=15">运动</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'家庭'}" href="?catId=16">家庭</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'古装'}" href="?catId=17">古装</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'武侠'}" href="?catId=18">武侠</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'西部'}" href="?catId=19">西部</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'历史'}" href="?catId=20">历史</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'传记'}" href="?catId=21">传记</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'情色'}" href="?catId=22">情色</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'歌舞'}" href="?catId=23">歌舞</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'黑色电影'}" href="?catId=24">黑色电影</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'短片'}" href="?catId=25">短片</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'纪录片'}" href="?catId=13">纪录片</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'其他'}" href="?catId=100">其他</a>
              </li>
            </ul>
          </li>
          <li class="tags-line tags-line-border" data-val="{tagTypeName:'source'}">
            <div class="tags-title">区域 :</div>
            <ul class="tags">
              <li class="active" data-state-val="{ sourceTagName:'全部'}">
                <a data-act="tag-click" data-val="{TagName:'全部'}" href="javascript:void(0);" style="cursor: default">全部</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'大陆'}" href="?sourceId=2">大陆</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'美国'}" href="?sourceId=3">美国</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'韩国'}" href="?sourceId=7">韩国</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'日本'}" href="?sourceId=6">日本</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'中国香港'}" href="?sourceId=10">中国香港</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'中国台湾'}" href="?sourceId=13">中国台湾</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'泰国'}" href="?sourceId=9">泰国</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'印度'}" href="?sourceId=8">印度</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'法国'}" href="?sourceId=4">法国</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'英国'}" href="?sourceId=5">英国</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'俄罗斯'}" href="?sourceId=14">俄罗斯</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'意大利'}" href="?sourceId=16">意大利</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'西班牙'}" href="?sourceId=17">西班牙</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'德国'}" href="?sourceId=11">德国</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'波兰'}" href="?sourceId=19">波兰</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'澳大利亚'}" href="?sourceId=20">澳大利亚</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'伊朗'}" href="?sourceId=21">伊朗</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'其他'}" href="?sourceId=100">其他</a>
              </li>
            </ul>
          </li>
          <li class="tags-line tags-line-border" data-val="{tagTypeName:'year'}">
            <div class="tags-title">年代 :</div>
            <ul class="tags">
              <li class="active" data-state-val="{ yearTagName:'全部'}">
                <a data-act="tag-click" data-val="{TagName:'全部'}" href="javascript:void(0);" style="cursor: default">全部</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'2018以后'}" href="?yearId=14">2018以后</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'2018'}" href="?yearId=13">2018</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'2017'}" href="?yearId=12">2017</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'2016'}" href="?yearId=11">2016</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'2015'}" href="?yearId=10">2015</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'2014'}" href="?yearId=9">2014</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'2013'}" href="?yearId=8">2013</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'2012'}" href="?yearId=7">2012</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'2011'}" href="?yearId=6">2011</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'2000-2010'}" href="?yearId=5">2000-2010</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'90年代'}" href="?yearId=4">90年代</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'80年代'}" href="?yearId=3">80年代</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'70年代'}" href="?yearId=2">70年代</a>
              </li>
              <li>
                <a data-act="tag-click" data-val="{TagName:'更早'}" href="?yearId=1">更早</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>    
    </div>
  </div>
</template>
<style lang="less">
.menu {
  margin-top: 81px;
  .subnav {
    background-color: #47464a;
    height: 60px;
    width: 100%;
    min-width: 1200px;
    text-align: center;
    .navbar {
      display: inline-block;
      overflow: hidden;
      li {
        display: inline-block;
        float: left;
        margin: 0;
        padding: 0;
        list-style: none;
        .active {
          color: #ef4238;
          position: relative;
          cursor: default;
        }
        .active:before {
          content: "";
          width: 2px;
          height: 0;
          display: inline-block;
          position: absolute;
          left: 50%;
          margin-left: -5px;
          top: 53px;
          border-bottom: 7px solid #fff;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-top: none;
        }
        a {
          display: block;
          font-size: 16px;
          color: #999;
          height: 60px;
          line-height: 60px;
          padding: 0 40px;
          text-decoration: none;
        }
      }
    }
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }
  }
  .movies-channel {
    width: 1120px;
    margin: auto;
    overflow: hidden;
    .tags-panel {
      border: 1px solid #e5e5e5;
      padding: 0 20px;
      margin-top: 40px;
      ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
        li {
          margin: 0;
          padding: 0;
          list-style-type: none;
        }
      }
      .tags-title {
        height: 24px;
        line-height: 24px;
        float: left;
        color: #999;
        font-size: 14px;
      }
      .tags-line {
          padding: 10px 0!important;
      }
      .tags-line-border {
          border-top: 1px dotted #e5e5e5;
      }
      .tags {
        margin-left: 40px !important;
        li {
              border-radius: 14px;
              padding: 3px 9px;
              display: inline-block;
              margin-left: 12px;
              a {
              color: #333;
              font-size: 14px;
          }
        }
        li.active {
          background: #f34d41;
          color: #fff;
          a {
              color: #fff;
          }
        }
      }
    }
  }
}
</style>

