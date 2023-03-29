const { fifaData } = require('./fifa.js')


/* Görev 1: 
	Verilen datayı parçalayarak aşağıdaki verileri (console.log-ing) elde ederek pratik yapın. 
	
	💡 İPUCU: Öncelikle datayı filtrelemek isteyebilirsiniz */
	let finalGame = fifaData.filter(game => { return game['Year'] === 2014 && game['Stage'] === "Final"})[0],
		getData = (game, type, team) => {
			const obj = {
				name: { home: game['Home Team Name'], away: game['Away Team Name'] },
				goal: { home: game['Home Team Goals'], away: game['Away Team Goals'] },
				winner: function() {
					if(this.goal.home === this.goal.away){
						let condition = game['Win conditions'],
							splitted = condition.split(" ");
						return [splitted[0], condition];
					}else{
						return (this.goal.home > this.goal.away) ? this.name.home : this.name.away;
					}
				}
			}
			return type === "winner" ? obj.winner() : obj[type][team];
		};
	

//(a) 2014 Dünya kupası Finali Evsahibi takım ismi (dizide "Home Team Name" anahtarı)
	console.log(getData(finalGame, "name", "home"));

//(b) 2014 Dünya kupası Finali Deplasman takım ismi  (dizide "Away Team Name" anahtarı)
	console.log(getData(finalGame, "name", "away"));

//(c) 2014 Dünya kupası finali Ev sahibi takım golleri (dizide "Home Team Goals" anahtarı)
	console.log(getData(finalGame, "goal", "home"));

//(d)2014 Dünya kupası finali Deplasman takım golleri  (dizide "Away Team Goals" anahtarı)
	console.log(getData(finalGame, "goal", "away"));

//(e) 2014 Dünya kupası finali kazananı*/
	console.log(getData(finalGame, "winner"));
	

/*  Görev 2: 
	Finaller adlı fonksiyonu kullanarak aşağıdakileri uygulayın:
	1. Bir dizi(array) olan Fifa datasını fonksiyonun birinci parametresi olarak alacak
	2. Sadece final maçlarını içeren nesnenin(object) datalarını filtreleyerek, bir dizi olarak döndürecek(return)
	
	💡 İPUCU - verilen data içindeki nesnelerin(objects) "Stage" anahtarına bakmalısınız
*/

function Finaller(arr) {
	let finalData = arr.filter(game => {return game['Stage'] === "Final"});
	return finalData;
}



/*  Görev 3: 
	Bir higher-order fonksiyonu olan Yillar isimli fonksiyona aşağıdakileri uygulayın: 
	1. fifaData dizisini(array) fonksiyonun birinci parametresi olarak alacak
	2. Görev 2'de yazdığınız Finaller fonksiyonunu, geriçağırım(callback) olarak fonksiyonun ikinci parametresi olarak alacak
	3. Finaller data setindeki tüm yılları içeren "years" adındaki diziyi(array) döndürecek
	*/

function Yillar(arr, callback) {
	let data = callback(arr), years = [];
	data.filter(game => { return years.push(game['Year']) });
	return years;
}


/*  Görev 4: 
	Bir higher-order fonksiyonunu olan Kazananlar isimli fonksiyona aşağıdakileri uygulayın:  
	1. fifaData dizisini(array) fonksiyonunun birinci parametresi olarak alacak
	2. Görev 2'de yazdığınız Finaller fonksiyonunu, geriçağırım(callback) olarak fonksiyonun ikinci parametresi olarak alacak
	3. Her final maçının kazananını (evsahibi ya da deplasman) belirleyecek
	💡 İPUCU: Beraberlikler(ties) için şimdilik endişelenmeyin (Detaylı bilgi için README dosyasına bakabilirsiniz.)
	4. Tüm kazanan ülkelerin isimlerini içeren `kazananlar` adında bir dizi(array) döndürecek(return)  */ 

function Kazananlar(arr, callback) {
	let data = callback(arr), 
		winners = data.map((game) => {
			return getData(game, "winner");
		});
	return winners;
}



/*  Görev 5: 
	Bir higher-order fonksiyonu olan YillaraGoreKazananlar isimli fonksiyona aşağıdakileri uygulayın:
	1. fifaData dizisini(array) fonksiyonunun birinci parametresi olarak alacak
	2. Görev 2'de yazdığınız Finaller fonksiyonunu, geriçağırım(callback) olarak fonksiyonun ikinci parametresi olarak alacak
	3. Görev 3'de yazdığınız Yillar fonksiyonunu, geriçağırım(callback) olarak fonksiyonun üçüncü parametresi olarak alacak
	4. Görev 4'de yazdığınız Kazananlar fonksiyonunu, geriçağırım(callback) olarak fonksiyonun dördüncü parametresi olarak alacak
	5. Her yıl için "{yıl} yılında, {ülke} dünya kupasını kazandı!" cümlesini(string) içeren bir diziyi(array) döndürecek
	
	💡 İPUCU: her cümlenin adım 4'te belirtilen cümleyle birebir aynı olması gerekmektedir.
*/

function YillaraGoreKazananlar(arr, finalsCb, yearsCb, winnersCb) {
	let winnersText = [],
		finals = finalsCb(arr),
		years = yearsCb(finals, finalsCb),
		winners = winnersCb(finals, finalsCb);

	years.map((year, idx) => {
		let winner = winners[idx],
			winnerText = Array.isArray(winner) ? `${year} yılında, ${winner[0]} dünya kupasını kazandı! (${winner[1]})` : `${year} yılında, ${winner} dünya kupasını kazandı!`;
		winnersText.push(winnerText);
	});
	return winnersText;
}


/*  Görev 6: 
	Bir higher order fonksiyonu olan `OrtalamaGolSayisi` isimli fonksiyona aşağıdakileri uygulayın: 
	1. Görev 2'de yazdığınız `Finaller` fonksiyonunu birinci parametre olarak alacak; 'fifaData' dizisini argüman olarak eklediğinizden emin olun
	
	💡 İPUCU: Çağırma örneği: `OrtalamaGolSayisi(Finaller(fifaData));`
	
	2. Her maç için Ortalama toplam evsahibi gol sayısı ve toplam deplasman gol sayısını hesaplayacak (her maçta atılan toplam gol sayısı)
	
	3. Sonucun 2. ondalığını yuvarlayıp, bulunan değeri döndürecek(return)
	
	💡 İPUCU: .reduce, .toFixed (dizilim(syntax) için MDN'ye bakın) kullan, ve bunu 2 adımda yapın) 
	
*/

function OrtalamaGolSayisi(finals) {
	let total = finals.reduce((ttl, game) => { return ttl + game['Home Team Goals'] + game['Away Team Goals'] }, 0),
		avr = total / finals.length;
	return avr.toFixed(2);
}



/// EKSTRA ÇALIŞMALAR ///

/*  BONUS 1:  
	`UlkelerinKazanmaSayilari` isminde bir fonksiyon oluşturun, parametre olarak `data` ve `takım kısaltmalarını` alacak ve hangi ülkenin kaç dünya kupası olduğunu döndürecek
	
	İpucu: "takım kısaltmaları" (team initials) için datada araştırma yapın!
İpucu: `.reduce` Kullanın*/

function UlkelerinKazanmaSayilari(arr, team, finalsCb) {
	let teamName,
		finals = finalsCb(arr),
		winCount = finals.reduce((ttl, game) => {
			let home = game['Home Team Initials'], 
				away = game['Away Team Initials'], 
				hGoal = game['Home Team Goals'], 
				aGoal = game['Away Team Goals'];

			if(hGoal === aGoal){
				let condition = game['Win conditions'].split(" "),
					teamPrefix = team.charAt(0).toUpperCase() + team.slice(1).toLowerCase();

				if(condition[0].startsWith(teamPrefix)){
					if(teamName === undefined) teamName = condition[0];
					ttl++;
				}
			}else{
				if(home === team && hGoal > aGoal){
					if(teamName === undefined) teamName = game['Home Team Name'];
					ttl++;
				}else if(away === team && aGoal > hGoal){
					if(teamName === undefined) teamName = game['Away Team Name'];
					ttl++;
				} 
			}

			return ttl;
		}, 0);

	return `${teamName} Dünya Kupası'nı toplamda ${winCount} kez kazandı!`;
}

console.log(UlkelerinKazanmaSayilari(fifaData, "BRA", Finaller));


/*  BONUS 2:  
EnCokGolAtan() isminde bir fonksiyon yazın, `data` yı parametre olarak alsın ve Dünya kupası finallerinde en çok gol atan takımı döndürsün */

function EnCokGolAtan(arr, finalsCb) {
	let finals = finalsCb(arr),
		teams = [], 
		filter = finals.filter(game => {
			let home = game['Home Team Name'], 
				away = game['Away Team Name'], 
				hGoal = game['Home Team Goals'], 
				aGoal = game['Away Team Goals'],
				increaseGoal = function(teamName, teamGoal) {
					let data = teams.filter(team => { if(team.name === teamName) return team })

					data[0] !== undefined ? data[0].goal+= teamGoal : teams.push({name: teamName, goal: teamGoal});
				};

			increaseGoal(home, hGoal);
			increaseGoal(away, aGoal);
		}),
		mostGoalsCount = teams.sort((a,b) => b.goal - a.goal);

	return `Dünya kupası finallerindeki en golcü takım: ${mostGoalsCount[0].goal} golle ${mostGoalsCount[0].name}!`;
}

console.log(EnCokGolAtan(fifaData, Finaller));


/*  BONUS 3: 
EnKotuDefans() adında bir fonksiyon yazın, `data` yı parametre olarak alsın ve Dünya kupasında finallerinde en çok golü yiyen takımı döndürsün*/

function EnKotuDefans(arr, finalsCb) {
	let finals = finalsCb(arr),
		teams = [],
		filter = finals.filter(game => {
			let home = game['Home Team Name'], 
				away = game['Away Team Name'], 
				hGoal = game['Home Team Goals'], 
				aGoal = game['Away Team Goals'],
				increaseGoal = function(teamName, teamGoal) {
					let data = teams.filter(team => { if(team.name === teamName) return team })

					data[0] !== undefined ? data[0].goal+= teamGoal : teams.push({name: teamName, goal: teamGoal});
				};

				increaseGoal(home, aGoal);
				increaseGoal(away, hGoal);
		}),
		mostGoalsCount = teams.sort((a,b) => b.goal - a.goal);

	return `Dünya kupası finallerindeki en kötü defansa sahip takım: ${mostGoalsCount[0].goal} golle ${mostGoalsCount[0].name}!`;
}

console.log(EnKotuDefans(fifaData, Finaller));


/* Hala vaktiniz varsa, README dosyasında listelenen hedeflerden istediğinizi aşağıdaki boşluğa yazabilirsiniz. */

function DunyaKupasinaKatilmaSayisi(arr, team) {
	let years = [],
		teamName,
		filter = arr.filter(game => {
			let year = game['Year'],
				home = game['Home Team Initials'],
				away = game['Home Team Initials'],
				counter = function(yearVal){
					let data = years.filter(yearV => { if(yearV.year === yearVal) return yearV});

					if(data[0] === undefined) years.push({year: yearVal});
				};

				if(home === team || away === team){
					counter(year);
					if(teamName === undefined) home === team ? teamName = game['Home Team Name'] : teamName = game['Away Team Name'];
				};
		})

	return `${teamName}, Dünya Kupası'na ${years.length} kez katıldı!`;
}

console.log(DunyaKupasinaKatilmaSayisi(fifaData, "TUR"));

function GolSayma(arr, yearVal, team){
	let teamName,
		goalCount = arr.reduce((ttl, game) => {
		let year = game['Year'],
			home = game['Home Team Initials'],
			away = game['Away Team Initials'],
			hGoal = game['Home Team Goals'], 
			aGoal = game['Away Team Goals'];
		if(year > yearVal){
			if(home === team) {
				if(teamName === undefined) teamName = game['Home Team Name'];
				ttl+= hGoal;
			}
			else if(away === team) {
				if(teamName === undefined) teamName = game['Away Team Name'];
				ttl+= aGoal;
			}
		}
		return ttl;
	}, 0);

	return `${teamName}, Dünya kupasında ${yearVal} yılından sonra toplamda ${goalCount} gol attı!`;
}

console.log(GolSayma(fifaData, 1930, "TUR"));


/* Bu satırın aşağısındaki kodları lütfen değiştirmeyin */
function sa(){
    console.log('Kodlar çalışıyor');
    return 'as';
}
sa();
module.exports = {
    sa,
    Finaller,
    Yillar,
    Kazananlar,
    YillaraGoreKazananlar,
    OrtalamaGolSayisi
}
