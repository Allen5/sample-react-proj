//使用ava测试
import test from 'ava';
import TweetUtil from './tweet.util';

test('returns an array of ids', t => {

  let tweetMock = {
	"tweet1": {},
	"tweet2": {},
	"tweet3": {}
  };

  let expectedListOfIds = ['tweet1', 'tweet2', 'tweet3'];
  let actualListOfIds = TweetUtil.getListOfTweetIds(tweetMock);
  
  t.deepEqual(actualListOfIds, expectedListOfIds);
  
});
