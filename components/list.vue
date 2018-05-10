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
                <dd>
                    <div class="movie-item">
                        <a href="/films/343720" target="_blank" data-act="movie-click" data-val="{movieid:343720}">
                            <div class="movie-poster">
                                <img class="poster-default" src="//ms0.meituan.net/mywww/image/loading_2.e3d934bf.png">
                                <img src="http://p0.meituan.net/movie/8c0af864aa72c46eb15c003d46ebfdc8602165.jpg@160w_220h_1e_1c">
                            </div>
                        </a>
                        <div class="channel-action channel-action-sale">
                            <a>购票</a>
                        </div>

                        <div class="movie-ver"></div>
                    </div>
                    <div class="channel-detail movie-item-title" title="后来的我们">
                        <a href="/films/343720" target="_blank" data-act="movies-click" data-val="{movieId:343720}">后来的我们</a>
                    </div>
                    <div class="channel-detail channel-detail-orange">
                        <i class="integer">8.</i>
                        <i class="fraction">1</i>
                    </div>

                </dd>
                <dd>
                    <div class="movie-item">
                        <a href="/films/248170" target="_blank" data-act="movie-click" data-val="{movieid:248170}">
                            <div class="movie-poster">
                                <img class="poster-default" src="//ms0.meituan.net/mywww/image/loading_2.e3d934bf.png">
                                <img src="http://p1.meituan.net/movie/266d24fe8567632e078b3717a096d104359095.jpg@160w_220h_1e_1c">
                            </div>
                        </a>

                        <div class="movie-ver">
                            <i class="imax3d"></i>
                        </div>
                    </div>
                    <div class="channel-detail movie-item-title" title="复仇者联盟3：无限战争">
                        <a href="/films/248170" target="_blank" data-act="movies-click" data-val="{movieId:248170}">复仇者联盟3：无限战争</a>
                    </div>
                    <div class="channel-detail channel-detail-orange">暂无评分</div>

                </dd>
                <dd>
                    <div class="movie-item">
                        <a href="/films/346637" target="_blank" data-act="movie-click" data-val="{movieid:346637}">
                            <div class="movie-poster">
                                <img class="poster-default" src="//ms0.meituan.net/mywww/image/loading_2.e3d934bf.png">
                                <img src="http://p0.meituan.net/movie/90c0d962d127ce8b11ec616795e91b0e6893141.jpg@160w_220h_1e_1c">
                            </div>
                        </a>
                        <div class="channel-action channel-action-sale">
                            <a>购票</a>
                        </div>

                        <div class="movie-ver"></div>
                    </div>
                    <div class="channel-detail movie-item-title" title="幕后玩家">
                        <a href="/films/346637" target="_blank" data-act="movies-click" data-val="{movieId:346637}">幕后玩家</a>
                    </div>
                    <div class="channel-detail channel-detail-orange">
                        <i class="integer">8.</i>
                        <i class="fraction">1</i>
                    </div>

                </dd>
                <dd>
                    <div class="movie-item">
                        <a href="/films/342791" target="_blank" data-act="movie-click" data-val="{movieid:342791}">
                            <div class="movie-poster">
                                <img class="poster-default" src="//ms0.meituan.net/mywww/image/loading_2.e3d934bf.png">
                                <img src="http://p0.meituan.net/movie/3e42788f6f6283f430e74ac2381dd6ad151806.jpg@160w_220h_1e_1c">
                            </div>
                        </a>
                        <div class="channel-action channel-action-sale">
                            <a>购票</a>
                        </div>

                        <div class="movie-ver">
                            <i class="imax2d"></i>
                        </div>
                    </div>
                    <div class="channel-detail movie-item-title" title="巴霍巴利王2：终结">
                        <a href="/films/342791" target="_blank" data-act="movies-click" data-val="{movieId:342791}">巴霍巴利王2：终结</a>
                    </div>
                    <div class="channel-detail channel-detail-orange">
                        <i class="integer">8.</i>
                        <i class="fraction">7</i>
                    </div>

                </dd>
                <dd>
                    <div class="movie-item">
                        <a href="/films/341624" target="_blank" data-act="movie-click" data-val="{movieid:341624}">
                            <div class="movie-poster">
                                <img class="poster-default" src="//ms0.meituan.net/mywww/image/loading_2.e3d934bf.png">
                                <img src="http://p0.meituan.net/movie/d414df29b364e010976c4be97d5ee907290840.jpg@160w_220h_1e_1c">
                            </div>
                        </a>
                        <div class="channel-action channel-action-sale">
                            <a>购票</a>
                        </div>

                        <div class="movie-ver">
                            <i class="imax3d"></i>
                        </div>
                    </div>
                    <div class="channel-detail movie-item-title" title="狂暴巨兽">
                        <a href="/films/341624" target="_blank" data-act="movies-click" data-val="{movieId:341624}">狂暴巨兽</a>
                    </div>
                    <div class="channel-detail channel-detail-orange">
                        <i class="integer">9.</i>
                        <i class="fraction">0</i>
                    </div>

                </dd>
                <dd>
                    <div class="movie-item">
                        <a href="/films/341178" target="_blank" data-act="movie-click" data-val="{movieid:341178}">
                            <div class="movie-poster">
                                <img class="poster-default" src="//ms0.meituan.net/mywww/image/loading_2.e3d934bf.png">
                                <img src="http://p0.meituan.net/movie/a547dd7f6851d7ced67ec1b6c8b7f3b2447754.jpg@160w_220h_1e_1c">
                            </div>
                        </a>
                        <div class="channel-action channel-action-sale">
                            <a>购票</a>
                        </div>

                        <div class="movie-ver">
                            <i class="imax3d"></i>
                        </div>
                    </div>
                    <div class="channel-detail movie-item-title" title="头号玩家">
                        <a href="/films/341178" target="_blank" data-act="movies-click" data-val="{movieId:341178}">头号玩家</a>
                    </div>
                    <div class="channel-detail channel-detail-orange">
                        <i class="integer">9.</i>
                        <i class="fraction">1</i>
                    </div>

                </dd>
                <dd>
                    <div class="movie-item">
                        <a href="/films/345013" target="_blank" data-act="movie-click" data-val="{movieid:345013}">
                            <div class="movie-poster">
                                <img class="poster-default" src="//ms0.meituan.net/mywww/image/loading_2.e3d934bf.png">
                                <img src="http://p1.meituan.net/movie/b7e5565130f63c44e8a876956cfd6c21937387.jpg@160w_220h_1e_1c">
                            </div>
                        </a>
                        <div class="channel-action channel-action-sale">
                            <a>购票</a>
                        </div>

                        <div class="movie-ver">
                            <i class="m3d"></i>
                        </div>
                    </div>
                    <div class="channel-detail movie-item-title" title="战神纪">
                        <a href="/films/345013" target="_blank" data-act="movies-click" data-val="{movieId:345013}">战神纪</a>
                    </div>
                    <div class="channel-detail channel-detail-orange">
                        <i class="integer">6.</i>
                        <i class="fraction">2</i>
                    </div>

                </dd>
                <dd>
                    <div class="movie-item">
                        <a href="/films/1198439" target="_blank" data-act="movie-click" data-val="{movieid:1198439}">
                            <div class="movie-poster">
                                <img class="poster-default" src="//ms0.meituan.net/mywww/image/loading_2.e3d934bf.png">
                                <img src="http://p0.meituan.net/movie/8179417ffa3a0f5403fea1cf58159e6c2216057.jpg@160w_220h_1e_1c">
                            </div>
                        </a>
                        <div class="channel-action channel-action-sale">
                            <a>购票</a>
                        </div>

                        <div class="movie-ver"></div>
                    </div>
                    <div class="channel-detail movie-item-title" title="低压槽：欲望之城">
                        <a href="/films/1198439" target="_blank" data-act="movies-click" data-val="{movieId:1198439}">低压槽：欲望之城</a>
                    </div>
                    <div class="channel-detail channel-detail-orange">
                        <i class="integer">6.</i>
                        <i class="fraction">9</i>
                    </div>

                </dd>
                <dd>
                    <div class="movie-item">
                        <a href="/films/635863" target="_blank" data-act="movie-click" data-val="{movieid:635863}">
                            <div class="movie-poster">
                                <img class="poster-default" src="//ms0.meituan.net/mywww/image/loading_2.e3d934bf.png">
                                <img src="http://p1.meituan.net/movie/4b547f0453c6101b67d8c9ac128aff0611093013.jpg@160w_220h_1e_1c">
                            </div>
                        </a>
                        <div class="channel-action channel-action-sale">
                            <a>购票</a>
                        </div>

                        <div class="movie-ver"></div>
                    </div>
                    <div class="channel-detail movie-item-title" title="香港大营救">
                        <a href="/films/635863" target="_blank" data-act="movies-click" data-val="{movieId:635863}">香港大营救</a>
                    </div>
                    <div class="channel-detail channel-detail-orange">
                        <i class="integer">7.</i>
                        <i class="fraction">4</i>
                    </div>

                </dd>
                <dd>
                    <div class="movie-item">
                        <a href="/films/1206839" target="_blank" data-act="movie-click" data-val="{movieid:1206839}">
                            <div class="movie-poster">
                                <img class="poster-default" src="//ms0.meituan.net/mywww/image/loading_2.e3d934bf.png">
                                <img src="http://p0.meituan.net/movie/b248c2280256886f37396e1b028bc9bc3892761.jpg@160w_220h_1e_1c">
                            </div>
                        </a>

                        <div class="movie-ver"></div>
                    </div>
                    <div class="channel-detail movie-item-title" title="我是你妈">
                        <a href="/films/1206839" target="_blank" data-act="movies-click" data-val="{movieId:1206839}">我是你妈</a>
                    </div>
                    <div class="channel-detail channel-detail-orange">暂无评分</div>

                </dd>
                <dd>
                    <div class="movie-item">
                        <a href="/films/1199029" target="_blank" data-act="movie-click" data-val="{movieid:1199029}">
                            <div class="movie-poster">
                                <img class="poster-default" src="//ms0.meituan.net/mywww/image/loading_2.e3d934bf.png">
                                <img src="http://p1.meituan.net/movie/d32522afac9e6684b99695ae239c2a3c755004.jpg@160w_220h_1e_1c">
                            </div>
                        </a>
                        <div class="channel-action channel-action-sale">
                            <a>购票</a>
                        </div>

                        <div class="movie-ver"></div>
                    </div>
                    <div class="channel-detail movie-item-title" title="玛丽与魔女之花">
                        <a href="/films/1199029" target="_blank" data-act="movies-click" data-val="{movieId:1199029}">玛丽与魔女之花</a>
                    </div>
                    <div class="channel-detail channel-detail-orange">
                        <i class="integer">8.</i>
                        <i class="fraction">0</i>
                    </div>

                </dd>
                <dd>
                    <div class="movie-item">
                        <a href="/films/344950" target="_blank" data-act="movie-click" data-val="{movieid:344950}">
                            <div class="movie-poster">
                                <img class="poster-default" src="//ms0.meituan.net/mywww/image/loading_2.e3d934bf.png">
                                <img src="http://p0.meituan.net/movie/8b154402ef3ac5d59e4a89649f4f5190375170.jpg@160w_220h_1e_1c">
                            </div>
                        </a>
                        <div class="channel-action channel-action-sale">
                            <a>购票</a>
                        </div>

                        <div class="movie-ver"></div>
                    </div>
                    <div class="channel-detail movie-item-title" title="21克拉">
                        <a href="/films/344950" target="_blank" data-act="movies-click" data-val="{movieId:344950}">21克拉</a>
                    </div>
                    <div class="channel-detail channel-detail-orange">
                        <i class="integer">8.</i>
                        <i class="fraction">2</i>
                    </div>

                </dd>
                <dd>
                    <div class="movie-item">
                        <a href="/films/1208942" target="_blank" data-act="movie-click" data-val="{movieid:1208942}">
                            <div class="movie-poster">
                                <img class="poster-default" src="//ms0.meituan.net/mywww/image/loading_2.e3d934bf.png">
                                <img src="http://p0.meituan.net/movie/f193e43ca706aa6bc6a26d6f53f0115a5315542.jpg@160w_220h_1e_1c">
                            </div>
                        </a>

                        <div class="movie-ver"></div>
                    </div>
                    <div class="channel-detail movie-item-title" title="超时空同居">
                        <a href="/films/1208942" target="_blank" data-act="movies-click" data-val="{movieId:1208942}">超时空同居</a>
                    </div>
                    <div class="channel-detail channel-detail-orange">暂无评分</div>

                </dd>
                <dd>
                    <div class="movie-item">
                        <a href="/films/528054" target="_blank" data-act="movie-click" data-val="{movieid:528054}">
                            <div class="movie-poster">
                                <img class="poster-default" src="//ms0.meituan.net/mywww/image/loading_2.e3d934bf.png">
                                <img src="http://p1.meituan.net/movie/3b5a995b705b11b5b190e9fd556eecba780985.jpg@160w_220h_1e_1c">
                            </div>
                        </a>
                        <div class="channel-action channel-action-sale">
                            <a>购票</a>
                        </div>

                        <div class="movie-ver"></div>
                    </div>
                    <div class="channel-detail movie-item-title" title="青年马克思">
                        <a href="/films/528054" target="_blank" data-act="movies-click" data-val="{movieId:528054}">青年马克思</a>
                    </div>
                    <div class="channel-detail channel-detail-orange">
                        <i class="integer">8.</i>
                        <i class="fraction">5</i>
                    </div>

                </dd>
                <dd>
                    <div class="movie-item">
                        <a href="/films/341941" target="_blank" data-act="movie-click" data-val="{movieid:341941}">
                            <div class="movie-poster">
                                <img class="poster-default" src="//ms0.meituan.net/mywww/image/loading_2.e3d934bf.png">
                                <img src="http://p1.meituan.net/movie/cb0c58e1da76a387e4433b69627c9680305708.jpg@160w_220h_1e_1c">
                            </div>
                        </a>
                        <div class="channel-action channel-action-sale">
                            <a>购票</a>
                        </div>

                        <div class="movie-ver">
                            <i class="m3d"></i>
                        </div>
                    </div>
                    <div class="channel-detail movie-item-title" title="冰雪女王3：火与冰">
                        <a href="/films/341941" target="_blank" data-act="movies-click" data-val="{movieId:341941}">冰雪女王3：火与冰</a>
                    </div>
                    <div class="channel-detail channel-detail-orange">
                        <i class="integer">8.</i>
                        <i class="fraction">2</i>
                    </div>

                </dd>
                <dd>
                    <div class="movie-item">
                        <a href="/films/1210869" target="_blank" data-act="movie-click" data-val="{movieid:1210869}">
                            <div class="movie-poster">
                                <img class="poster-default" src="//ms0.meituan.net/mywww/image/loading_2.e3d934bf.png">
                                <img src="http://p1.meituan.net/movie/34b3b6abc59b42ca92dbf484e0820e5b299325.jpg@160w_220h_1e_1c">
                            </div>
                        </a>
                        <div class="channel-action channel-action-sale">
                            <a>购票</a>
                        </div>

                        <div class="movie-ver"></div>
                    </div>
                    <div class="channel-detail movie-item-title" title="午夜十二点">
                        <a href="/films/1210869" target="_blank" data-act="movies-click" data-val="{movieId:1210869}">午夜十二点</a>
                    </div>
                    <div class="channel-detail channel-detail-orange">
                        <i class="integer">3.</i>
                        <i class="fraction">3</i>
                    </div>

                </dd>
                <dd>
                    <div class="movie-item">
                        <a href="/films/1199188" target="_blank" data-act="movie-click" data-val="{movieid:1199188}">
                            <div class="movie-poster">
                                <img class="poster-default" src="//ms0.meituan.net/mywww/image/loading_2.e3d934bf.png">
                                <img src="http://p0.meituan.net/movie/d848fc22146ad0c6685fa24ab25962702553619.jpg@160w_220h_1e_1c">
                            </div>
                        </a>
                        <div class="channel-action channel-action-sale">
                            <a>购票</a>
                        </div>

                        <div class="movie-ver"></div>
                    </div>
                    <div class="channel-detail movie-item-title" title="犬之岛">
                        <a href="/films/1199188" target="_blank" data-act="movies-click" data-val="{movieId:1199188}">犬之岛</a>
                    </div>
                    <div class="channel-detail channel-detail-orange">
                        <i class="integer">7.</i>
                        <i class="fraction">9</i>
                    </div>

                </dd>
                <dd>
                    <div class="movie-item">
                        <a href="/films/1217651" target="_blank" data-act="movie-click" data-val="{movieid:1217651}">
                            <div class="movie-poster">
                                <img class="poster-default" src="//ms0.meituan.net/mywww/image/loading_2.e3d934bf.png">
                                <img src="http://p1.meituan.net/movie/d82b9a96080537e1618701c3bdbc62b12324617.jpg@160w_220h_1e_1c">
                            </div>
                        </a>

                        <div class="movie-ver"></div>
                    </div>
                    <div class="channel-detail movie-item-title" title="小公主艾薇拉与神秘王国">
                        <a href="/films/1217651" target="_blank" data-act="movies-click" data-val="{movieId:1217651}">小公主艾薇拉与神秘王国</a>
                    </div>
                    <div class="channel-detail channel-detail-orange">
                        <i class="integer">5.</i>
                        <i class="fraction">9</i>
                    </div>

                </dd>
                <dd>
                    <div class="movie-item">
                        <a href="/films/603864" target="_blank" data-act="movie-click" data-val="{movieid:603864}">
                            <div class="movie-poster">
                                <img class="poster-default" src="//ms0.meituan.net/mywww/image/loading_2.e3d934bf.png">
                                <img src="http://p1.meituan.net/movie/9eff40739c403e7725b2cf0bbb2b7d121421673.jpg@160w_220h_1e_1c">
                            </div>
                        </a>

                        <div class="movie-ver"></div>
                    </div>
                    <div class="channel-detail movie-item-title" title="战犬瑞克斯">
                        <a href="/films/603864" target="_blank" data-act="movies-click" data-val="{movieId:603864}">战犬瑞克斯</a>
                    </div>
                    <div class="channel-detail channel-detail-orange">暂无评分</div>

                </dd>
                <dd>
                    <div class="movie-item">
                        <a href="/films/248907" target="_blank" data-act="movie-click" data-val="{movieid:248907}">
                            <div class="movie-poster">
                                <img class="poster-default" src="//ms0.meituan.net/mywww/image/loading_2.e3d934bf.png">
                                <img src="http://p0.meituan.net/movie/44727a0bb1a878f08668f4ba0d4b6d38930544.jpg@160w_220h_1e_1c">
                            </div>
                        </a>

                        <div class="movie-ver"></div>
                    </div>
                    <div class="channel-detail movie-item-title" title="新乌龙院之笑闹江湖">
                        <a href="/films/248907" target="_blank" data-act="movies-click" data-val="{movieId:248907}">新乌龙院之笑闹江湖</a>
                    </div>
                    <div class="channel-detail channel-detail-orange">暂无评分</div>

                </dd>
                <dd>
                    <div class="movie-item">
                        <a href="/films/341628" target="_blank" data-act="movie-click" data-val="{movieid:341628}">
                            <div class="movie-poster">
                                <img class="poster-default" src="//ms0.meituan.net/mywww/image/loading_2.e3d934bf.png">
                                <img src="http://p0.meituan.net/movie/f04fa1fad47fd041839cb9659a25edc7468061.jpg@160w_220h_1e_1c">
                            </div>
                        </a>

                        <div class="movie-ver">
                            <i class="m3d"></i>
                        </div>
                    </div>
                    <div class="channel-detail movie-item-title" title="侏罗纪世界2">
                        <a href="/films/341628" target="_blank" data-act="movies-click" data-val="{movieId:341628}">侏罗纪世界2</a>
                    </div>
                    <div class="channel-detail channel-detail-orange">暂无评分</div>

                </dd>
                <dd>
                    <div class="movie-item">
                        <a href="/films/337093" target="_blank" data-act="movie-click" data-val="{movieid:337093}">
                            <div class="movie-poster">
                                <img class="poster-default" src="//ms0.meituan.net/mywww/image/loading_2.e3d934bf.png">
                                <img src="http://p0.meituan.net/movie/af99d1c23bc18d189883a17c438202311939935.jpg@160w_220h_1e_1c">
                            </div>
                        </a>
                        <div class="channel-action channel-action-sale">
                            <a>购票</a>
                        </div>

                        <div class="movie-ver">
                            <i class="m3d"></i>
                        </div>
                    </div>
                    <div class="channel-detail movie-item-title" title="龙在哪里？">
                        <a href="/films/337093" target="_blank" data-act="movies-click" data-val="{movieId:337093}">龙在哪里？</a>
                    </div>
                    <div class="channel-detail channel-detail-orange">
                        <i class="integer">8.</i>
                        <i class="fraction">6</i>
                    </div>

                </dd>
                <dd>
                    <div class="movie-item">
                        <a href="/films/1183637" target="_blank" data-act="movie-click" data-val="{movieid:1183637}">
                            <div class="movie-poster">
                                <img class="poster-default" src="//ms0.meituan.net/mywww/image/loading_2.e3d934bf.png">
                                <img src="http://p1.meituan.net/movie/15f0ae1961a0229f71e5c5106a8c55902561485.jpg@160w_220h_1e_1c">
                            </div>
                        </a>
                        <div class="channel-action channel-action-sale">
                            <a>购票</a>
                        </div>

                        <div class="movie-ver"></div>
                    </div>
                    <div class="channel-detail movie-item-title" title="黄金花">
                        <a href="/films/1183637" target="_blank" data-act="movies-click" data-val="{movieId:1183637}">黄金花</a>
                    </div>
                    <div class="channel-detail channel-detail-orange">
                        <i class="integer">8.</i>
                        <i class="fraction">8</i>
                    </div>

                </dd>
                <dd>
                    <div class="movie-item">
                        <a href="/films/1217637" target="_blank" data-act="movie-click" data-val="{movieid:1217637}">
                            <div class="movie-poster">
                                <img class="poster-default" src="//ms0.meituan.net/mywww/image/loading_2.e3d934bf.png">
                                <img src="http://p1.meituan.net/movie/92b3426ac9a67fdcf503d02549e1aa7c3532120.jpg@160w_220h_1e_1c">
                            </div>
                        </a>
                        <div class="channel-action channel-action-sale">
                            <a>购票</a>
                        </div>

                        <div class="movie-ver"></div>
                    </div>
                    <div class="channel-detail movie-item-title" title="厉害了，我的国">
                        <a href="/films/1217637" target="_blank" data-act="movies-click" data-val="{movieId:1217637}">厉害了，我的国</a>
                    </div>
                    <div class="channel-detail channel-detail-orange">
                        <i class="integer">9.</i>
                        <i class="fraction">6</i>
                    </div>

                </dd>
                <dd>
                    <div class="movie-item">
                        <a href="/films/881837" target="_blank" data-act="movie-click" data-val="{movieid:881837}">
                            <div class="movie-poster">
                                <img class="poster-default" src="//ms0.meituan.net/mywww/image/loading_2.e3d934bf.png">
                                <img src="http://p0.meituan.net/movie/cf9ff1aad19254d99aae31cd53065a271370654.jpg@160w_220h_1e_1c">
                            </div>
                        </a>
                        <div class="channel-action channel-action-sale">
                            <a>购票</a>
                        </div>

                        <div class="movie-ver"></div>
                    </div>
                    <div class="channel-detail movie-item-title" title="起跑线">
                        <a href="/films/881837" target="_blank" data-act="movies-click" data-val="{movieId:881837}">起跑线</a>
                    </div>
                    <div class="channel-detail channel-detail-orange">
                        <i class="integer">8.</i>
                        <i class="fraction">9</i>
                    </div>

                </dd>
                <dd>
                    <div class="movie-item">
                        <a href="/films/1203554" target="_blank" data-act="movie-click" data-val="{movieid:1203554}">
                            <div class="movie-poster">
                                <img class="poster-default" src="//ms0.meituan.net/mywww/image/loading_2.e3d934bf.png">
                                <img src="http://p1.meituan.net/movie/dc07682883ccbcdfb3ae532e2a90d4ff1342251.jpg@160w_220h_1e_1c">
                            </div>
                        </a>

                        <div class="movie-ver"></div>
                    </div>
                    <div class="channel-detail movie-item-title" title="寂静之地">
                        <a href="/films/1203554" target="_blank" data-act="movies-click" data-val="{movieId:1203554}">寂静之地</a>
                    </div>
                    <div class="channel-detail channel-detail-orange">暂无评分</div>

                </dd>
                <dd>
                    <div class="movie-item">
                        <a href="/films/341516" target="_blank" data-act="movie-click" data-val="{movieid:341516}">
                            <div class="movie-poster">
                                <img class="poster-default" src="//ms0.meituan.net/mywww/image/loading_2.e3d934bf.png">
                                <img src="http://p1.meituan.net/movie/1c4ed8635cc63bdb523980cb04c7f05b645983.jpg@160w_220h_1e_1c">
                            </div>
                        </a>

                        <div class="movie-ver">
                            <i class="m3d"></i>
                        </div>
                    </div>
                    <div class="channel-detail movie-item-title" title="狄仁杰之四大天王">
                        <a href="/films/341516" target="_blank" data-act="movies-click" data-val="{movieId:341516}">狄仁杰之四大天王</a>
                    </div>
                    <div class="channel-detail channel-detail-orange">暂无评分</div>

                </dd>
                <dd>
                    <div class="movie-item">
                        <a href="/films/338426" target="_blank" data-act="movie-click" data-val="{movieid:338426}">
                            <div class="movie-poster">
                                <img class="poster-default" src="//ms0.meituan.net/mywww/image/loading_2.e3d934bf.png">
                                <img src="http://p0.meituan.net/movie/d246750ce2b31a8fdbb656677770d6231487170.jpg@160w_220h_1e_1c">
                            </div>
                        </a>
                        <div class="channel-action channel-action-sale">
                            <a>购票</a>
                        </div>

                        <div class="movie-ver"></div>
                    </div>
                    <div class="channel-detail movie-item-title" title="湮灭">
                        <a href="/films/338426" target="_blank" data-act="movies-click" data-val="{movieId:338426}">湮灭</a>
                    </div>
                    <div class="channel-detail channel-detail-orange">
                        <i class="integer">7.</i>
                        <i class="fraction">1</i>
                    </div>

                </dd>
                <dd>
                    <div class="movie-item">
                        <a href="/films/344162" target="_blank" data-act="movie-click" data-val="{movieid:344162}">
                            <div class="movie-poster">
                                <img class="poster-default" src="//ms0.meituan.net/mywww/image/loading_2.e3d934bf.png">
                                <img src="http://p0.meituan.net/movie/50fc70e63364f92ff540ef02d26f8102631867.jpg@160w_220h_1e_1c">
                            </div>
                        </a>
                        <div class="channel-action channel-action-sale">
                            <a>购票</a>
                        </div>

                        <div class="movie-ver"></div>
                    </div>
                    <div class="channel-detail movie-item-title" title="脱单告急">
                        <a href="/films/344162" target="_blank" data-act="movies-click" data-val="{movieId:344162}">脱单告急</a>
                    </div>
                    <div class="channel-detail channel-detail-orange">
                        <i class="integer">8.</i>
                        <i class="fraction">4</i>
                    </div>

                </dd>
                <dd>
                    <div class="movie-item">
                        <a href="/films/344419" target="_blank" data-act="movie-click" data-val="{movieid:344419}">
                            <div class="movie-poster">
                                <img class="poster-default" src="//ms0.meituan.net/mywww/image/loading_2.e3d934bf.png">
                                <img src="http://p1.meituan.net/movie/c6dc21c4b8fa81954776c125d4467a1e2391613.jpg@160w_220h_1e_1c">
                            </div>
                        </a>

                        <div class="movie-ver"></div>
                    </div>
                    <div class="channel-detail movie-item-title" title="七号公馆">
                        <a href="/films/344419" target="_blank" data-act="movies-click" data-val="{movieId:344419}">七号公馆</a>
                    </div>
                    <div class="channel-detail channel-detail-orange">暂无评分</div>

                </dd>
            </dl>
        </div>
    </div>
</template>


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

