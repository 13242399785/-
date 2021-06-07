/**
 * 分类对象类集合
 * @typedef Point
 * @property {string} parent - Some description for point - eg:null
 * @property {string} desc
 * @property {string} name.required - Some description for point - eg: 
 */

/**
 * 物品对象类集合
 * @typedef Goods
 * @property {string} name.required
 * @property {string} icon  - Some description for point - eg: '' 
 * @property {string} star - Some description for point - eg: '' 
 * @property {string} desc - Some description for point - eg: '' 
 * @property {string} detail - Some description for point - eg:
 */
/**
 * 文章对象类集合
 * @typedef Articles
 * @property {string} title
 * @property {Array.<Cate>} cate  - Some description for point - eg: '' 
 * @property {string} url - Some description for point - eg: '' 
 * @property {string} date - Some description for point - eg: '' 
 * @property {string} content - Some description for point - eg:
 */
 /**
 * 广告位对象类集合
 * @typedef Ads
 * @property {string} name
 * @property {Array.<Cate>} items  - Some description for point - eg: 
 */
  
 /**
 * 广告位选项
 * @typedef Cate
 * @property {string} img
 * @property {string} url
 */

 /**
 * 目录对象类集合
 * @typedef Catalog
 * @property {string} name
 * @property {string} parent
 * @property {string} path
 * @property {string} icon
 * @property {string} desc
 * @property {Array.<CataFo>} children  - Some description for point - eg: 
 */
  /**
 * 广告位选项
 * @typedef CataFo
 * @property {string} name
 * @property {string} parent
 * @property {string} path
 * @property {string} icon
 * @property {Array.<CataFo>} children
 */

 /**
 * 用户对象类集合
 * @typedef Admin_users
 * @property {string} username
 * @property {string} password  - Some description for point - eg: 
 * @property {string} level
 */

 /**
 * 英雄对象类集合
 * @typedef Hero
 * @property {string} name.required
 * @property {string} avatar  - Some description for point - eg: 
 * @property {string} banner - Some description for point - eg: 
 * @property {string} title - Some description for point - eg: 
 * @property {string} photo - Some description for 图文介绍 - eg:
 * @property {Array.<Cate>}  cate - Some description for 类型 - eg:
 * @property {Scores.model} scores - Some description for 难度 - eg:
 * @property {Shipin.model} shipin - Some description for 视频 - eg:
 * @property {Array.<Skins>} skins - Some description for 皮肤 - eg:
 * @property {Array.<Skills>} skills - Some description for 技能 - eg:
 * @property {Wind.model} downWind - Some description for 顺风出装 - eg:
 * @property {Wind.model} upWind - Some description for 逆风出装 - eg:
 * @property {string} usageTips - Some description for 使用技巧 - eg:
 * @property {string} battleTips - Some description for 对抗技巧 - eg:
 * @property {string} teamTips - Some description for 团战思路 - eg:
 * @property {Person.model} partners - Some description for 最佳搭档 - eg:
 * @property {Person.model} restrained - Some description for 被谁克制 - eg:
 * @property {Person.model} restraint - Some description for 克制谁 - eg:
 */

 /**
 * 类型
 * @typedef Cate
 * @property {string} type
 * @property {string} ref
 */
 /**
 * 人物关系
 * @typedef Person
 * @property {Array.<Cate>} hero
 * @property {string} desc
 */
  /**
 * 难度等级
 * @typedef Scores
 * @property {number} difficulty.required
 * @property {number} skill  - Some description for point - eg: 
 * @property {number} attack - Some description for point - eg: 
 * @property {number} survive - Some description for point - eg: 
 */
 /**
 * 视频
 * @typedef Shipin
 * @property {string} title
 * @property {string} video  - Some description for point - eg: 
 * @property {number} submit - Some description for point - eg: 
 * @property {number} fan - Some description for point - eg: 
 * @property {number} view - Some description for point - eg: 
 */
 /**
 * 皮肤
 * @typedef Skins
 * @property {string} img
 * @property {string} name  - Some description for point - eg: 
 */
/**
 * 出装
 * @typedef Wind
 * @property {Array.<Cate>} equipment
 * @property {string} tips  - Some description for point - eg: 
 */
/**
 * 技能
 * @typedef Skills
 * @property {string} icon
 * @property {string} name  - Some description for point - eg: 
 * @property {string} delay  - Some description for point - eg: 
 * @property {string} cost  - Some description for point - eg: 
 * @property {string} desc  - Some description for point - eg: 
 * @property {string} tips  - Some description for point - eg: 
 */

/**<!---------------分类 categories------------------->*/
/**
 * 分类管理
 * @route get /admin/api/rest/categories
 * @group 分类管理 - Operations about 分类管理
 * @summary 查询列表 
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 * @security JWT
 */
/**
 * 分类管理
 * @route get /admin/api/rest/categories/{id}
 * @group 分类管理 
 * @summary 根据id查询列表 
 * @param {string} id.path.required
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 * @security JWT
 */
/**
 * 分类管理
 * @route post /admin/api/rest/categories
 * @group 分类管理 
 * @summary 添加分类
 * @param {Point.model} point.body.required - the new point
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 * @security JWT
 */
/**
 * 分类管理
 * @route put /admin/api/rest/categories/{id}
 * @group 分类管理 
 * @summary 根据id修改分类信息
 * @param {Point.model} point.body.required - the new point
 * @param {string} id.path.required
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 * @security JWT
 */
/**
 * 分类管理
 * @route DELETE /admin/api/rest/categories/{id}
 * @group 分类管理 
 * @summary 根据id删除分类
 * @param {string} id.path.required
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 * @security JWT
 */


/**<!---------------物品管理 items------------------->*/
/**
 * 物品管理
 * @route get /admin/api/rest/items
 * @group 物品管理 
 * @summary 查询列表 
 * @param {number} pagenum.query.required
 * @param {number} pagesize.query.required
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 * @security JWT
 */
/**
 * 物品管理
 * @route get /admin/api/rest/items/{id}
 * @group 物品管理 
 * @summary 根据id查询列表 
 * @param {string} id.path.required
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 * @security JWT
 */
/**
 * 物品管理
 * @route post /admin/api/rest/items
 * @group 物品管理 
 * @summary 添加物品
 * @param {Goods.model} goods.body.required - the new goods
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 * @security JWT
 */
/**
 * 物品管理
 * @route put /admin/api/rest/items/{id}
 * @group 物品管理 
 * @summary 根据id修改物品信息
 * @param {Goods.model} goods.body.required - the new goods
 * @param {string} id.path.required - the new goods
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 * @security JWT
 */
/**
 * 物品管理
 * @route DELETE /admin/api/rest/items/{id}
 * @group 物品管理 
 * @summary 根据id删除物品
 * @param {string} id.path.required
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 * @security JWT
 */

/**<!---------------英雄管理 hero------------------->*/
/**
 * 英雄管理
 * @route get /admin/api/rest/hero
 * @group 英雄管理 
 * @summary 查询列表 
 * @param {number} pagenum.query.required
 * @param {number} pagesize.query.required
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 * @security JWT
 */
/**
 * 英雄管理
 * @route get /admin/api/rest/hero/{id}
 * @group 英雄管理 
 * @summary 根据id查询列表 
 * @param {string} id.path.required
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 * @security JWT
 */
/**
 * 英雄管理
 * @route post /admin/api/rest/hero
 * @group 英雄管理 
 * @summary 添加英雄
 * @param {Hero.model} hero.body.required - the new hero
 * @returns {Array.<Hero>} Hero - Some description for hero
 * @returns {Error}  default - Unexpected error
 * @security JWT
 */
/**
 * 英雄管理
 * @route put /admin/api/rest/hero/{id}
 * @group 英雄管理 
 * @summary 根据id修改英雄信息
 * @param {Hero.model} hero.body.required - the new hero
 * @param {string} id.path.required - the new goods
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 * @security JWT
 */
/**
 * 英雄管理
 * @route DELETE /admin/api/rest/hero/{id}
 * @group 英雄管理 
 * @summary 根据id删除英雄
 * @param {string} id.path.required
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 * @security JWT
 */

/**<!---------------文章管理 articles------------------->*/
/**
 * 文章管理
 * @route get /admin/api/rest/articles
 * @group 文章管理 
 * @summary 查询列表 
 * @param {number} pagenum.query.required
 * @param {number} pagesize.query.required
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 * @security JWT
 */
/**
 * 文章管理
 * @route get /admin/api/rest/articles/{id}
 * @group 文章管理 
 * @summary 根据id查询列表 
 * @param {string} id.path.required
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 * @security JWT
 */
/**
 * 文章管理
 * @route post /admin/api/rest/articles
 * @group 文章管理 
 * @summary 添加文章
 * @param {Articles.model} articles.body.required - the new hero
 * @returns {Array.<Articles>} Hero - Some description for hero
 * @returns {Error}  default - Unexpected error
 * @security JWT
 */
/**
 * 文章管理
 * @route put /admin/api/rest/articles/{id}
 * @group 文章管理 
 * @summary 根据id修改文章信息
 * @param {Articles.model} articles.body.required - the new articles
 * @param {string} id.path.required - the new goods
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 * @security JWT
 */
/**
 * 文章管理
 * @route DELETE /admin/api/rest/articles/{id}
 * @group 文章管理 
 * @summary 根据id删除文章
 * @param {string} id.path.required
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 * @security JWT
 */

/**<!---------------广告位管理 ads------------------->*/
/**
 * 广告位管理
 * @route get /admin/api/rest/ads
 * @group 广告位管理 
 * @summary 查询列表 
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 * @security JWT
 */
/**
 * 广告位管理
 * @route get /admin/api/rest/ads/{id}
 * @group 广告位管理 
 * @summary 根据id查询列表 
 * @param {string} id.path.required
 * @returns {object} 200 - An array of user ads
 * @returns {Error}  default - Unexpected error
 * @security JWT
 */
/**
 * 广告位管理
 * @route post /admin/api/rest/ads
 * @group 广告位管理 
 * @summary 添加广告位
 * @param {Ads.model} ads.body.required - the new ads
 * @returns {Array.<Ads>} Hero - Some description for ads
 * @returns {Error}  default - Unexpected error
 * @security JWT
 */
/**
 * 广告位管理
 * @route put /admin/api/rest/ads/{id}
 * @group 广告位管理 
 * @summary 根据id修改广告位信息
 * @param {Ads.model} ads.body.required - the new ads
 * @param {string} id.path.required - the new goods
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 * @security JWT
 */
/**
 * 广告位管理
 * @route DELETE /admin/api/rest/ads/{id}
 * @group 广告位管理 
 * @summary 根据id删除广告位
 * @param {string} id.path.required
 * @returns {object} 200 - An array of user ads
 * @returns {Error}  default - Unexpected error
 * @security JWT
 */

/**<!---------------用户管理 admin_users------------------->*/
/**
 * 用户管理
 * @route get /admin/api/rest/admin_users
 * @group 用户管理 
 * @summary 查询列表 
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 * @security JWT
 */
/**
 * 用户管理
 * @route get /admin/api/rest/admin_users/{id}
 * @group 用户管理 
 * @summary 根据id查询列表 
 * @param {string} id.path.required
 * @returns {object} 200 - An array of user admin_users
 * @returns {Error}  default - Unexpected error
 * @security JWT
 */
/**
 * 用户管理
 * @route post /admin/api/rest/admin_users
 * @group 用户管理 
 * @summary 添加用户
 * @param {Admin_users.model} admin_users.body.required - the new ads
 * @returns {Array.<Ads>} Hero - Some description for admin_users
 * @returns {Error}  default - Unexpected error
 * @security JWT
 */
/**
 * 用户管理
 * @route put /admin/api/rest/admin_users/{id}
 * @group 用户管理 
 * @summary 根据id修改用户信息
 * @param {Admin_users.model} admin_users.body.required - the new ads
 * @param {string} id.path.required - the new goods
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 * @security JWT
 */
/**
 * 用户管理
 * @route DELETE /admin/api/rest/admin_users/{id}
 * @group 用户管理 
 * @summary 根据id删除用户
 * @param {string} id.path.required
 * @returns {object} 200 - An array of user admin_users
 * @returns {Error}  default - Unexpected error
 * @security JWT
 */

/**<!---------------目录管理 catalog------------------->*/
/**
 * 目录管理
 * @route get /admin/api/rest/catalog
 * @group 目录管理 
 * @summary 查询列表 
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 * @security JWT
 */
/**
 * 目录管理
 * @route get /admin/api/rest/catalog/{id}
 * @group 目录管理 
 * @summary 根据id查询列表 
 * @param {string} id.path.required
 * @returns {object} 200 - An array of user catalog
 * @returns {Error}  default - Unexpected error
 * @security JWT
 */
/**
 * 目录管理
 * @route post /admin/api/rest/catalog
 * @group 目录管理 
 * @summary 添加目录
 * @param {Catalog.model} catalog.body.required - the new ads
 * @returns {Array.<Ads>} Hero - Some description for catalog
 * @returns {Error}  default - Unexpected error
 * @security JWT
 */
/**
 * 目录管理
 * @route put /admin/api/rest/catalog/{id}
 * @group 目录管理 
 * @summary 根据id修改目录信息
 * @param {Catalog.model} catalog.body.required - the new ads
 * @param {string} id.path.required - the new goods
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 * @security JWT
 */
/**
 * 目录管理
 * @route DELETE /admin/api/rest/catalog/{id}
 * @group 目录管理 
 * @summary 根据id删除目录
 * @param {string} id.path.required
 * @returns {object} 200 - An array of user catalog
 * @returns {Error}  default - Unexpected error
 * @security JWT
 */