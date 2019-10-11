var app = new Vue({
  el: '#app',
  data: function() {
    return {
      vestij: 0,
      air: 0,
      TFT: false,
      KTP: false,
      Wingman: false,
      Smash: false,
      CallOf: false,
      Poker: false,
      pizzam: 0,
      pizzal: 0,
      kebab: 0,
      croques: 0,
      sand: 0,
      sandsam: 0
    }
  },
  computed: {
    nomtournois: function() {
      tournois = []
            
      if(this.TFT)
        tournois.push("TFT")
      if(this.KTP)
        tournois.push("KTP")
      if(this.Wingman)
        tournois.push("Wingman")
      if(this.Smash)
        tournois.push("Smash")
      if(this.CallOf)
        tournois.push("CallOf")
      if(this.Poker)
        tournois.push("Poker")
      return tournois
    },
    tournois: function() {
      return [this.TFT, this.KTP, this.Wingman, this.Smash, this.CallOf].map(el => el ? 1 : 0).reduce((acc, cur) => acc + cur);
    },
    prixpoker: function() {
      return (this.Poker ? (!!this.vestij ? 1 : 3) : 0) 
    },
    prixtournois: function() {
      return (this.tournois > 0 ? this.tournois - (!!this.air ? 1 : 0) : 0) + this.prixpoker
    },
    entree: function() {
      return 4 - (!!this.vestij ? 1 : 0) - (!!this.air ? 1 : 0)
    },
    internet: function() {
      return (!!this.air ? 0 : 2)
    },
    croques5 : function() {
      return Math.floor(this.croques / 5)
    },
    croques3 : function() {
      return Math.floor((this.croques % 5) / 3)
    },
    croques1: function() {
      return (this.croques % 5) % 3
    },
    textcroques: function() {
      let text = []
      if(this.croques5 > 0)
        text.push(this.croques5 + " x 5 croques")
      if(this.croques3 > 0)
        text.push(this.croques3 + " x 3 croques")
      if(text.length > 0 && this.croques1 > 0)
        text.push(this.croques1 + " croque")
      
      return text.length > 0 ? '(' + text.join(" et ") + ')' : ''
    },
    prixcroques: function() {
      return this.croques1 * 1.5 + this.croques3 * 4 + this.croques5 * 6
    },
    sand2: function() {
      return Math.floor(this.sand / 2)
    },
    sand1: function() {
      return this.sand % 2
    },
    prixsand: function() {
      return this.sand2 * 3.5 + this.sand1 * 2
    },
    textsand: function() {
      let text = []
      if(this.sand2 > 0)
        text.push(this.sand2 + " x Merino")
      if(text.length > 0 && this.sand1 > 0)
        text.push(this.sand1 + " sandwich")
      
      return text.length > 0 ? '(' + text.join(" et ") + ')' : '' 
    },
    sandsam2: function() {
      return Math.floor(this.sandsam / 2)
    },
    sandsam1: function() {
      return this.sandsam % 2
    },
    prixsandsam: function() {
      return this.sandsam2 * 3.5 + this.sandsam1 * 2
    },
    textsandsam: function() {
      let text = []
      if(this.sandsam2 > 0)
        text.push(this.sandsam2 + " x Merino")
      if(text.length > 0 && this.sandsam1 > 0)
        text.push(this.sandsam1 + " sandwich")
      
      return text.length > 0 ? '(' + text.join(" et ") + ')' : '' 
    },
    textlivraison: function() {
      let text = []
      if(this.pizzal > 0)
        text.push(this.pizzal + " x Pizza L")
      if(this.pizzam > 0)
        text.push(this.pizzam + " x Pizza M")
      if(this.kebab > 0)
        text.push(this.kebab + " x Kebab/Tacos")

      return text.join(" et ")
    },
    prixbouffe: function() {
      return this.pizzal * 8 + this.pizzam * 6 + this.kebab * 5 + this.prixcroques + this.prixsand + this.prixsandsam
    },
    prixlivraison: function() {
      return (this.pizzal + this.pizzam + this.kebab) * 0.5
    },
    total: function() {
      return this.entree + this.internet + this.prixtournois + this.prixbouffe + this.prixlivraison
    },
  }
})