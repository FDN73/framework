import { Spec } from '@specron/spec';
import { GenericProvider } from '../../..';

const spec = new Spec<{
  provider: GenericProvider;
}>();

spec.before(async (stage) => {
  const provider = new GenericProvider({
    client: stage.web3,
  });
  stage.set('provider', provider);
});

spec.test('normalizes ID when set', async (ctx) => {
  const provider = ctx.get('provider');
  provider.orderGatewayId = '0xf9196f9f176fd2ef9243e8960817d5fbe63d79aa';
  ctx.is(provider.orderGatewayId, '0xF9196F9f176fd2eF9243E8960817d5FbE63D79aa');
});

export default spec;
