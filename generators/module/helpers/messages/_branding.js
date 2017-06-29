const chalk = require('chalk')

const branding = (version, author, website, repoURL) => {
    return `${chalk.styles.magenta.open}


   _______  ______    _______  _______  _______  _______   
  |       ||    _ |  |       ||   _   ||       ||       |  
  |       ||   | ||  |    ___||  |_|  ||_     _||    ___|  
  |       ||   |_||_ |   |___ |       |  |   |  |   |___   
  |      _||    __  ||    ___||       |  |   |  |    ___|  
  |     |_ |   |  | ||   |___ |   _   |  |   |  |   |___   
  |_______||___|  |_||_______||__| |__|  |___|  |_______|  
   __   __  _______  ______   __   __  ___      _______    
  |  |_|  ||       ||      | |  | |  ||   |    |       |   
  |       ||   _   ||  _    ||  | |  ||   |    |    ___|   
  |       ||  | |  || | |   ||  |_|  ||   |    |   |___    
  |       ||  |_|  || |_|   ||       ||   |___ |    ___|   
  | ||_|| ||       ||       ||       ||       ||   |___    
  |_|   |_||_______||______| |_______||_______||_______|                                                                                     
            ${chalk.styles.cyan.close}
           `
}

module.exports = branding
