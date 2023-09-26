function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) {
  	return Math.floor(Math.random() * (max - min)) + min;
}

function generateName(){
	var name1 = ["dog", "goat", "pig", "sheep", "cattle", "cat", "chicken", "donkey", "duck", "buffalo", "bee", "camel", "horse", "moth", "pigeon", "goose", "yak", "camel", "alpaca", "owl", "ferret", "dove", "turkey", "goldfish", "rabbit", "koi", "canary", "finch", "mouse", "rat", "fox", "hedgehog", "guppy", "swan", "squirrel", "cow", "hamster", "python", "cockatoo", "gecko", "parrot", "hawk", "boar", "otter", "weasel", "chipmunk", "turtle", "quail", "gecko", "rhinoceros", "crab", "bat", "meerkat", "piranha", "jellyfish", "octopus", "snail", "squid"]

	var name2 = ["golden", "wonderful", "alive", "able", "intelligent", "known", "popular", "environmental", "emotional", "civil", "aware", "foreign", "recent", "unusual", "similar", "huge", "strong", "strict", "actual", "obvious", "odd", "important", "rare", "various", "responsible", "serious", "acceptable", "traditional", "suitable", "tall", "curious", "consistent", "different", "realistic", "confident", "latter", "hungry", "comprehensive", "global", "useful", "successful", "careful", "capable", "efficient", "southern", "former", "visible", "typical", "reasonable", "substantial", "sufficient", "informal", "sudden", "mad", "electrical", "nice", "impossible", "impressive", "wooden", "logical", "competitive", "accurate", "anxious", "remarkable", "automatic", "distinct", "interesting", "basic", "united", "massive", "available", "obviously", "numerous", "healthy", "tiny", "relevant", "nervous", "lonely", "dangerous", "silver"]

	var name = capFirst(name1[getRandomInt(0, name1.length + 1)]) + ' ' + capFirst(name2[getRandomInt(0, name2.length + 1)]);
	return name;
}

exports.NAME = class NAME {
    randomName = generateName()
}
