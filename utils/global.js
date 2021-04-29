exports.getRandomInt = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
exports.toFancyTime = function(time){
	timec= time/60
	if(timec > 0.5){
		timec = `${timec.toFixed(1)} hour(s)`
		return timec;
	}
	else{
		timec = `${time.toFixed(1)} second(s)`
		return timec;
	}
}
exports.getUserIdFromMention = function(mention) {
	if (!mention) return;
	if (mention.startsWith('<@') && mention.endsWith('>')) {
		mention = mention.slice(2, -1);
		if (mention.startsWith('!')) {
			mention = mention.slice(1);
		}
		return mention;
	}
	if (!mention.startsWith('<@') && !mention.endsWith('>')) {
		return mention;
	}
}
exports.conToUser = function(user){
	if (!user.startsWith('<@') && !user.endsWith('>')) {
		user = '<@'+user+'>'
		return user;
	}
}