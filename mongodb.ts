const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
console.log(url)
MongoClient.connect(url, function(err, db) {
	if(err) throw err;
	const dbo = db.db('taro')
	const whereObj = {name:'guo'}
	const newData = {$set:{addr:'广州',age:3}}
	const addMore = [{name:'guo',age:2},{name:'chen',addr:'jiazi'},{name:'bing'}]
	
	// 增加一条
	// dbo.collection('site').insertOne(whereObj,function(err,res){
	// 	if(err) throw err;
	// 	console.log('插入数据成功',res)
	// 	db.close()
	// })
	// 增加多条
	// dbo.collection('site').insertMany(addMore,function(err,res){
	// 	if(err) throw err;
	// 	/**res
	// 	 * acknowledged: true,
	// 	  insertedCount: 3,
	// 	  insertedIds: {
	// 		'0': new ObjectId("610cd3ce7f581efc5ac50bf0"),
	// 		'1': new ObjectId("610cd3ce7f581efc5ac50bf1"),
	// 		'2': new ObjectId("610cd3ce7f581efc5ac50bf2")
	// 	  }
	// 	 */
	// 	console.log('插入数据成功',res)
	// 	db.close()
	// })
	// 删除一条
	// dbo.collection('site').deleteOne(whereObj,function(err,res){
	// 	if(err) throw err;
	// 	console.log(res.deletedCount)
	// 	db.close()
	// })
	// 删除多条
	// dbo.collection('site').deleteMany(whereObj,function(err,res){
	// 	if(err) throw err;
	// 	console.log(res.deletedCount)
	// 	db.close()
	// })
	// 修改
	// dbo.collection('site').updateOne(whereObj,newData,function(err,res) {
	// 	if(err) throw err;
	// 	console.log(res)
	// })
	// 查找一条或多条,合并成数组返回
	// dbo.collection('site').find(whereObj).toArray(function(err, res) {
	// 	if(err) throw err;
	// 	console.log('查找数据',res)
	// 	db.close()
	// })
	// 查找一条,返回对象
	// dbo.collection('site').findOne(whereObj,function(err, res) {
	// 	if(err) throw err;
	// 	console.log('查找数据',res)
	// 	db.close()
	// })
	
})

export default function(){
	
}