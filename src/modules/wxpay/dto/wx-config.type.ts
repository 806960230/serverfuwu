import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class WxConfig {
  @Field({
    description: '公众号ID',
  })
  appId: string;

  @Field({
    description: '时间戳，自1970年以来的秒数',
  })
  timeStamp: string;

  @Field({
    description: '随机串',
  })
  nonceStr: string;

  @Field({
    description: '参数包',
  })
  package: string;

  @Field({
    description: '微信签名方式',
  })
  signType: string;

  @Field({
    description: '微信签名',
  })
  paySign: string;
}
