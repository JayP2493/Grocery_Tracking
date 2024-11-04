class user {
    constructor (name) {
        this.name = name;
    }

    purchased = [];
    
    makeUserPurchase (product, day) {
        for (let i = 0; i < this.purchased.length; i++) {
            if (product.name === this.purchased[i].product.name) {
                this.purchased[i].day += product.consumedDays;
                return;
            }
        }

        this.purchased.push({product: product, day: day});
    }

    checkDeplete (day) {
        for (let i = 0; i < this.purchased.length; i++) {
            let diffDay = day - this.purchased[i].day;
            let stokeday = this.purchased[i].product.consumedDays - diffDay;

            if (stokeday <= 5) {
                if (stokeday > 0) {
                    console.log(`${this.name}, ${this.purchased[i].product.name} is in stoke of only ${stokeday}`);
                } else {
                    console.log(`${this.name}, ${this.purchased[i].product.name} is out of stoke`)
                }
            }
        }
    }
}

class produt {
    constructor (name,consumedDays) {
        this.name = name;
        this.consumedDays = consumedDays;
    }
}

let userData = [new user("sujit"), new user("Rahul")];

let dal = new produt("dal", 10);
let haldi = new produt("haldi", 15);

let day = 0;

function makePurchase (user, item) {
    user.makeUserPurchase(item,day);
}

function check(day, user) {
    user.checkDeplete(day);
}

// time line

day += 2;
makePurchase(userData[0],dal);

day += 3
makePurchase(userData[1],haldi);

day += 1;
makePurchase(userData[0],haldi);
makePurchase(userData[1],dal);

day += 1;
makePurchase(userData[1],haldi);
makePurchase(userData[0],dal);


for (let i = 1; i < 30; i++) {
    day++;
    console.log ("Purchase day: " + day);
    check(day, userData[0])
    check(day, userData[1])
}