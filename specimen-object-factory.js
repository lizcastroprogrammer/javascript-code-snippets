// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
console.log(mockUpStrand());
console.log(mockUpStrand());

  const pAequorFactory = (num, arr) => {
    return {
      mutate() {
        const mutatedBase = arr[Math.floor(Math.random() * 15)];
        let newBase;
        if(mutatedBase === 'A') {
          newBase = 'T';
        } else if(mutatedBase === 'T') {
          newBase = 'C';
        } else if(mutatedBase === 'G') {
          newBase = 'A';
        }
         return newBase;
      },
      compareDNA(pAequor) {
        let dnaArr = pAequor.dna;
        dnaArr.filter(element => {
          let commonDna = 0;
          if(dnaArr[element] === this.dna[dnaArr.indexof]) {
            commonDna += 1;
          }
          let decimalCommonDna = commonDna / 15;
          let percentageCommonDna = decimalCommonDna * 10;
          return `specimen #${pAequor.specimenNum} and specimen #${this.specimenNum} have ${percentageCommonDna}% DNA in common`;
        });
      },
      willLikelySurvive() {
        let cAndGBases = this.dna.filter(element => {
          element === 'C' || element === 'G';
        });
        console.log(cAndGBases.length);
        if(9 <= cAndGBases.length) {
          return true;
        } else {
          return false;
        }
      },
      specimenNum: num,
      dna: arr
    };
  };

  let specimen1 = pAequorFactory(1, mockUpStrand());
  console.log(specimen1.willLikelySurvive());
  
  const survivableSpecimens = () => {
    let survivableSpecimensArr = [];
    let specimenNum = 1;
    
    if(survivableSpecimensArr.length < 30) {
        for (let i = 0; i < 2; i++) {
        var newSpecimen = pAequorFactory(specimenNum, mockUpStrand());
        specimenNum += 1;
        if(newSpecimen.willLikelySurvive()) {
            survivableSpecimens.push(newSpecimen);
            }
        }
    } else if(survivableSpecimensArr.length === 30) {
        return survivableSpecimensArr;
    }
}
    
    
    
    
    // let newSpecimen;
//     do{
//       var newSpecimen = pAequorFactory(specimenNum, mockUpStrand());
//       specimenNum += 1;
//       if(newSpecimen.willLikelySurvive()) {
//       survivableSpecimens.push(newSpecimen);
//     }
// }

//       while(survivableSpecimens.length < 30);
//       return survivableSpecimens;
//   }
  
  console.log(survivableSpecimens());