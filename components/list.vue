<template>
    <div class="list">
        <div class="movies-panel">
            <div class="movies-sorter">
                <div class="cat-sorter">
                    <ul>
                        <li>
                            <span class="sort-control-group" data-act="sort-click" data-val="{tagId: 1 }" style="cursor: default">
                                <span class="sort-control sort-radio sort-radio-checked"></span>
                                <span class="sort-control-label">按热门排序</span>
                            </span>
                        </li>
                        <li>
                            <span class="sort-control-group" data-act="sort-click" data-val="{tagId: 2 }" data-href="?sortId=2" onclick="location.href=this.getAttribute('data-href')">
                                <span class="sort-control sort-radio"></span>
                                <span class="sort-control-label">按时间排序</span>
                            </span>
                        </li>
                        <li>
                            <span class="sort-control-group" data-act="sort-click" data-val="{tagId: 3 }" data-href="?sortId=3" onclick="location.href=this.getAttribute('data-href')">
                                <span class="sort-control sort-radio"></span>
                                <span class="sort-control-label">按评价排序</span>
                            </span>
                        </li>
                    </ul>
                </div>
                <div class="play-sorter">
                    <span class="sort-control-group" data-act="isplay-click" data-val="{isplay:1}" data-href="?isPlay=1" onclick="location.href=this.getAttribute('data-href')">
                        <span class="sort-control sort-checkbox"></span>
                        <span class="sort-control-label">可播放</span>
                    </span>
                </div>
            </div>
        </div>
        <div class="movies-list">
            <dl class="movie-list">
                <dd v-for="(item, index) in hotList.hot" :key="index">
                    <div class="movie-item">
                        <a href="/films/343720" target="_blank" data-act="movie-click" data-val="{movieid:343720}">
                            <div class="movie-poster">
                                <img class="poster-default" src="//ms0.meituan.net/mywww/image/loading_2.e3d934bf.png">
                                <img :src="editeImg(item.img)">
                            </div>
                        </a>
                        <div class="channel-action channel-action-sale">
                            <a>购票</a>
                        </div>

                        <div class="movie-ver"></div>
                    </div>
                    <div class="channel-detail movie-item-title" title="后来的我们">
                        <a href="/films/343720" target="_blank" data-act="movies-click" data-val="{movieId:343720}">{{item.nm}}</a>
                    </div>
                    <div class="channel-detail channel-detail-orange">
                        <i class="integer">8.</i>
                        <i class="fraction">1</i>
                    </div>
                </dd>                
            </dl>
        </div>
    </div>
</template>
<script>
 export default {
    props: ['hotList'],
    methods: {
        editeImg(url) {
            return url.replace('w.h/','')+'@214w_297h_1e_1c'
        }
    }
 }   
</script>

<style lang="less" scoped>
.list {
  width: 1120px;
  margin: auto;
  overflow: hidden;
  .movies-panel {
    margin-top: 40px;
    .movies-sorter {
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
      }
      li {
        display: inline-block;
        height: 16px;
        line-height: 18px;
        margin-right: 30px;
      }
      .cat-sorter {
        float: left;
        padding-left: 2px;
        .sort-control-group {
          cursor: pointer;
          line-height: 16px;
          .sort-control {
            display: inline-block;
            vertical-align: top;
            width: 16px;
            height: 16px;
            margin-right: 2px;
          }
          .sort-radio-checked {
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFW…Q+Qg1f8oOBGY+JMm+zj/UaQ6HV3ucFK7DhK1fY5JYj+RVgAJTVZv0N5fOpAAAAAElFTkSuQmCC)
              no-repeat;
          }
          .sort-control-label {
            font-size: 14px;
            vertical-align: top;
          }
          .sort-radio {
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFW…OczmWCM/joUY7/7zMdfeclLzcYEvQZPNsHCqa/82Hs/y3AAM8+1imcdvfkaaaaaelftksuqmcc)
              no-repeat;
          }
        }
      }
    }
  }
  .movies-list {
      overflow: hidden;
    margin-top: 20px;
    dl {
      display: block;
      margin: -29px 0 20px -25px;
    }
    .movie-list {
      dd {
         margin: 30px 0 0 30px;
        display: inline-block;
        vertical-align: top;
        position: relative;
        .movie-item {
          position: relative;
          border: 1px solid #efefef;
          margin: -1px;
        }
        .channel-detail {
          width: 160px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: center;
          font-size: 16px;
          margin-top: 10px;
          a {
            color: #333;
          }
        }
        .movie-poster {
          background-color: #fcfcfc;
          width: 160px;
          height: 220px;
          overflow: hidden;
          position: relative;
          img {
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
          }
        }
        .poster-default {
          top: 50%;
          left: 50%;
          width: 68px;
          height: 62px;
          margin-top: -31px;
          margin-left: -34px;
          a {
            color: #333;
          }
        }
        .channel-detail-orange {
          color: #ffb400;
          .integer {
            font-size: 18px;
          }
          .fraction {
            font-size: 14px;
          }
        }
        .channel-action-sale {
          background-color: #f34d41;
        }
        .channel-action {
          position: absolute;
          right: 5px;
          bottom: 5px;
          padding: 0 3px;
          height: 18px;
          line-height: 18px;
          border-radius: 1px;
          a {
            color: #fff;
            font-size: 12px;
            vertical-align: top;
          }
        }
      }
    }
  }
}
</style>

