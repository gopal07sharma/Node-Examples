import chalk from 'chalk'
import figlet from 'figlet'
figlet('NodeJs  ki   maa   ki   chut', (err , result)=>{
     if(err){
        console.log('Some problem with figlet ', err)
     }
     else{
        console.log(result);
     }
})
setTimeout(() => {
    console.log(chalk.red('pdhle jaake btc'));
}, 4000);
