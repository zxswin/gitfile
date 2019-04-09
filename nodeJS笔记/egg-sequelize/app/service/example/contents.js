const Service = require('egg').Service;

class Content extends Service {
  /** 查询所有内容信息(包括内容下有哪些评论 这些评论是哪些用户评论的)  */
  async getContents() {
    const contents = await this.ctx.model.Contents.findAll({
      attributes: ['id', 'content', 'title', 'like_count'], // 只会返回content字段内容
      include: [
        {
          model: this.ctx.model.Comments,
          attributes: ['comment'], // 只会返回content字段内容
          include: [
            {
              model: this.ctx.model.Users,
              attributes: ['username'], // 只会返回username字段内容
            },
          ],
        },
      ],
    });

    return contents;
  }

  /** 对某个内容信息进行评论  */

  async comment(body) {
    const ctx = this.ctx;
    let contentId = body.content_id; // 要评论的内容id
    let commentContent = body.comment; // 评论的内容
    let uid = ctx.session.uid;

    // 判断当前评论的内容是否存在
    let content = await ctx.model.Contents.findById(contentId);
    if (!content) {
      return {
        code: 2,
        data: '没有对应的内容',
      };
    }

    // 查询当前用户是否对该内容已经评论过了
    let comments = await ctx.model.Comments.findOne({
      where: {
        [ctx.model.Sequelize.Op.and]: [{ content_id: contentId }, { user_id: uid }],
      },
    });

    if (comments) {
      return {
        code: 3,
        data: '你已经点评论过了',
      };
    }

    // 对内容的comment_count数据进行增加
    content.set('comment_count', content.get('comment_count') + 1);
    await content.save();

    // 对评论表进行新增操作
    await ctx.model.Comments.build({
      content_id: contentId,
      user_id: uid,
      comment: commentContent,
    }).save();

    return {
      code: 0,
      data: content,
    };
  }

  /** 对某个内容进行点赞  */
  async like(body) {
    const ctx = this.ctx;
    // 让客户端请求的时候带过来一个凭证
    let contentId = body.content_id; // 要点赞的内容id
    // 根据上面的cookie确定，如果当前请求是一个登录的用户，那么头信息肯定会有当前这个登录用户id
    let uid = ctx.session.uid;

    console.log('uid============', uid);

    if (!uid) {
      return {
        code: 1,
        data: '你还没有登录',
      };
    }

    // 获取当前被点赞的内容
    let content = await ctx.model.Contents.findById(contentId);
    if (!content) {
      return {
        code: 2,
        data: '没有对应的内容',
      };
    }

    // 查询当前用户是否对该内容已经点过赞了
    let like = await ctx.model.Likes.findOne({
      where: {
        [ctx.model.Sequelize.Op.and]: [{ content_id: contentId }, { user_id: uid }],
      },
    });

    if (like) {
      return {
        code: 3,
        data: '你已经点过赞了',
      };
    }

    // 对内容的like数据进行增加
    content.set('like_count', content.get('like_count') + 1);
    await content.save();

    await ctx.model.Likes.build({
      content_id: contentId,
      user_id: uid,
    }).save();

    return {
      code: 0,
      data: content,
    };
  }
}

module.exports = Content;
