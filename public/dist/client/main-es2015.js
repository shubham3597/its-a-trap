(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/agriculture/agriculture.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/agriculture/agriculture.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\nSelect State    \n\n</div>\n<select [(ngModel)]=\"state\" class=\"dropdown\">\n        <option value=\"Kerala\">Kerala</option>\n      </select>\n\n      <div class=\"row\">\n            Select Crop Type \n            \n            </div>\n            <select [(ngModel)]=\"crop\">\n                    <option value=\"kharif\">Kharif</option>\n                    <option value=\"rabi\">Rabi</option>\n                  </select>\n\n                  <button (click)=\"predict()\">Predict Output</button>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div style=\"text-align:center\">\n  <h1>\n    Believe me, it's a TRAP!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div> -->\n<app-navbar></app-navbar>\n\n<body>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12 offset-md-0\">\n        <router-outlet>\n            <ngx-ui-loader></ngx-ui-loader>\n        </router-outlet>\n      </div>\n    </div>\n  </div>\n</body>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/blockchain/blockchain.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/blockchain/blockchain.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-top:40px; padding:20px;\">\n        <div class=\"col-lg-12\" style=\"text-align:center;\">\n          <h1 style=\"font-weight:inherit; font-size: 55px;\">Your Transactions</h1>\n          <div class=\"col-sm-12\" style=\"color: #28c3d4; font-weight: bold\">\n              Solving Global Climatic Crisis Empowering Women\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"mt-4 col-md-12\">\n        </div>\n      </div>\n<div class=\"container\">\n    <div class=\"row\">\n            <div class=\"col-md-2\">\n                </div>\n                <div class=\"col-md-10\">\n                        <button style=\"background-color: #28c3d4; margin-right: 20px; float: right;\" routerLink=\"/new/transaction/pending\" class=\"btn\" *ngIf=\"thereArePendingTransactions()\">\n                            Pending transactions\n                            <span class=\"badge badge-light\">{{blockchain.pendingTransactions.length}}</span>\n                        </button>\n                        &nbsp;\n                        <button  style=\"background-color: #28c3d4; margin-right: 0px; float: right;\" routerLink=\"/settings\" class=\"btn\">\n                            Settings\n                        </button>\n                        &nbsp;\n                        <button style=\"background-color: #28c3d4; float: right; margin-right: 10px;\" routerLink=\"/new/transaction\" class=\"btn\">\n                            Create transaction\n                        </button>\n                    </div>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/blockchain/components/block-view/block-view.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/blockchain/components/block-view/block-view.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" [class.border-primary]=\"isSelectedBlock()\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Block {{ getBlockNumber() }} <small class=\"text-muted\" *ngIf=\"block.previousHash == 0\">(Genesis block)</small></h5>\n    </div>\n\n     <ul class=\"list-group list-group-flush\">\n\t    <li class=\"list-group-item\">\n\t    \t<span class=\"\">Hash</span>\n\t    \t<br>\n\t    \t<div class=\"text-truncate\" [style.color]=\"'#' + block.hash.substring(0,6)\">\n\t    \t\t<small>{{ block.hash }}</small>\n\t    \t</div>\n\n\t\t\t<br>\n\t\t\t<span class=\"\">Hash of previous block</span>\n\t    \t<br>\n\n\t    \t<div class=\"text-truncate\" [style.color]=\"'#' + block.previousHash.substring(0,6)\">\n\t    \t\t<small>{{ block.previousHash }}</small>\n\t    \t</div>\n\t    </li>\n\n\t    <li class=\"list-group-item\">\n\t    \t<span class=\"\">Nonce</span><br>\n\t    \t<div class=\"text-truncate text-muted\">\n\t    \t\t<small>{{ block.nonce }}</small>\n\t    \t</div>\n\t    </li>\n\n\t    <li class=\"list-group-item\">\n\t    \t<span class=\"\">Timestamp</span><br>\n\t    \t<div class=\"text-truncate text-muted\">\n\t    \t\t<small>{{ block.timestamp }}</small>\n\t    \t</div>\n\t    </li>\n\t  </ul>\n\n\t  <!-- <div class=\"card-body\"> -->\n\t  \t<!-- <span class=\"card-link\" *ngIf=\"!blockHasTx()\">Block has no transactions</span> -->\n\t  \t<!-- <span class=\"card-link\" *ngIf=\"blockHasTx()\">Contains {{block.transactions.length}} transactions</span> -->\n\t  <!-- </div> -->\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/blockchain/components/transactions-table/transactions-table.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/blockchain/components/transactions-table/transactions-table.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"transactions.length === 0\">This block has no transactions</p>\n\n<table class=\"table table-hover table-striped\" *ngIf=\"transactions.length > 0\">\n  <thead>\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">From</th>\n      <th scope=\"col\">To</th>\n      <th scope=\"col\">Amount</th>\n      <th scope=\"col\">Timestamp</th>\n      <th scope=\"col\">Valid?</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let tx of transactions; index as index\">\n      <td>{{index}}</td>\n      <td class=\"text-truncate\" style=\"max-width: 100px;\">\n\n        <a [routerLink]=\"['/wallet', tx.fromAddress]\" *ngIf=\"tx.fromAddress !== null\">{{tx.fromAddress}}</a>\n\n        <span *ngIf=\"tx.fromAddress === null\">System</span>\n\n        <span class=\"text-muted\" *ngIf=\"blockchainService.addressIsFromCurrentUser(tx.fromAddress)\">\n          <br><small>(That's yours!)</small>\n        </span>\n      </td>\n      <td class=\"text-truncate\" style=\"max-width: 100px;\">\n          <a [routerLink]=\"['/wallet', tx.toAddress]\">{{tx.toAddress}}</a>\n\n          <span class=\"text-muted\" *ngIf=\"blockchainService.addressIsFromCurrentUser(tx.toAddress)\">\n            <br><small>(That's yours!)</small>\n          </span>\n      </td>\n      <td>\n        {{tx.amount}}\n        <span *ngIf=\"tx.fromAddress === null\" class=\"text-muted\"><br><small>(Block reward)</small></span>\n      </td>\n      <td>\n        {{tx.timestamp}}<br>\n        <span class=\"text-muted\"><small>{{tx.timestamp |date:'MMM d, y, HH:mm'}}</small></span>\n      </td>\n      <td style=\"max-width: 40px;\">\n        <span *ngIf=\"tx.isValid()\">✓</span>\n        <span *ngIf=\"!tx.isValid()\">✗</span>\n      </td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/blockchain/pages/blockchain-viewer/blockchain-viewer.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/blockchain/pages/blockchain-viewer/blockchain-viewer.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-blockchain>\n</app-blockchain>\n<div class=\"container\">\n\t<h1>Blocks on chain</h1>\n\t<p>Each card represents a block on the chain. Click on a block to see the transactions stored inside.</p>\n</div>\n\n<div class=\"container\" style=\"overflow-x: scroll;white-space: nowrap;\">\n\t<app-block-view \n\t\t*ngFor=\"let block of blocks\" \n\t\t[block]=\"block\" \n\t\t[selectedBlock]=\"selectedBlock\"\n\t\t(click)=\"showTransactions(block)\"\n\t></app-block-view>\n</div>\n\n<br><br>\n\n<div class=\"container\">\n\t<h1>Transactions inside block {{ getBlockNumber(selectedBlock) }}</h1>\n\n\t<app-transactions-table\n\t\t[transactions]=\"selectedBlock.transactions\"\n\t></app-transactions-table>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/blockchain/pages/create-transaction/create-transaction.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/blockchain/pages/create-transaction/create-transaction.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n        <div class=\"mt-4 col-md-12\">\n        </div>\n\t  </div>\n\t  \n<div class=\"container\">\n\t<h1>Create transaction</h1>\n\t<p>Transfer some money to someone!</p>\n\n\t<br>\n\n\t<div class=\"form-group\">\n\t    <label for=\"fromAddress\">From address</label>\n\t    <input type=\"text\" class=\"form-control\" id=\"fromAddress\" aria-describedby=\"fromAddressHelp\" [(ngModel)]=\"ownWalletKey.publicKey\" disabled>\n\t    <small id=\"fromAddressHelp\" class=\"form-text text-muted\">\n\t    \tThis is your wallet address. You cannot change it because you can only spend your own coins.\n\t    </small>\n  \t</div>\n\n  \t<div class=\"form-group\">\n\t    <label for=\"toAddress\">To address</label>\n\t    <input type=\"text\" class=\"form-control\" id=\"toAddress\" aria-describedby=\"toAddressHelp\" [(ngModel)]=\"newTx.toAddress\">\n\t    <small id=\"toAddressHelp\" class=\"form-text text-muted\">\n\t    \tThe address of the wallet where you want to send the money to. You can type random text here (if you are not interested in recovering the funds)\n\t    </small>\n  \t</div>\n\n  \t<div class=\"form-group\">\n\t    <label for=\"amount\">Amount</label>\n\t    <input type=\"number\" class=\"form-control\" id=\"amount\" aria-describedby=\"amountHelp\" [(ngModel)]=\"newTx.amount\">\n\t    <small id=\"amountHelp\" class=\"form-text text-muted\">\n\t    \tYou can transfer any amount. Account balance is not checked in this demo. Have at it!\n\t    </small>\n  \t</div>\n\n  \t<button (click)=\"createTransaction()\" style=\"background-color: #28c3d4\" type=\"submit\" class=\"btn\">Sign & create transaction</button>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/blockchain/pages/pending-transactions/pending-transactions.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/blockchain/pages/pending-transactions/pending-transactions.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n        <div class=\"mt-4 col-md-12\">\n        </div>\n\t  </div>\n\t  \n<div class=\"container\">\n\n\t<div class=\"alert alert-success\" role=\"alert\" *ngIf=\"justAddedTx\">\n\t\tTransaction created successfully!\n\t</div>\n\n\t<h1>Pending transactions</h1>\n\t<p>These transactions are waiting to be included in the next block. Next block is created when you start the mining process.</p>\n\n\t<app-transactions-table\n\t\t[transactions]=\"pendingTransactions\">\n\t</app-transactions-table>\n\n\t <button class=\"btn\" style=\"background-color: #28c3d4\" *ngIf=\"pendingTransactions.length > 0 && miningInProgress === false\" (click)=\"minePendingTransactions()\">\n     \tStart mining\n    </button>\n\n    <div *ngIf=\"miningInProgress === true\">\n    \tMining block.. Hang on...\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/blockchain/pages/settings/settings.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/blockchain/pages/settings/settings.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"mt-4 col-md-12\">\n    </div>\n  </div>\n  \n<div class=\"container\">\n  <h1>Settings</h1>\n  <p>Control how the blockchain behaves when new transactions or blocks are created. Changes are automatically saved.</p>\n\n  <br>\n\n  <div class=\"form-group\">\n    <label for=\"difficulty\">Difficulty</label>\n    <input type=\"number\" class=\"form-control\" id=\"difficulty\" aria-describedby=\"difficultyHelp\" [(ngModel)]=\"blockchain.difficulty\">\n    <small id=\"difficultyHelp\" class=\"form-text text-muted\">\n    \tDifficulty controls how long the mining process takes. Higher numbers will make mining a lot slower!\n    \t<br>Default: 2\n    </small>\n  </div>\n\n  <br>\n\n  <div class=\"form-group\">\n    <label for=\"miningReward\">Mining reward</label>\n    <input type=\"number\" class=\"form-control\" id=\"miningReward\" aria-describedby=\"miningRewardHelp\" [(ngModel)]=\"blockchain.miningReward\">\n    <small id=\"miningRewardHelp\" class=\"form-text text-muted\">\n\t\tHow much \"coins\" a miner receives for successfully creating a new block for the chain.\n\t\t<br>Default: 100\n    </small>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/blockchain/pages/wallet-balance/wallet-balance.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/blockchain/pages/wallet-balance/wallet-balance.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<h1>Wallet details</h1>\n\n\t<p style=\"word-wrap:break-word;\">\n\t\t<strong>Address:</strong>\n\t\t<br>\n\t\t{{walletAddress}}\n\t</p>\n\n\t<p>\n\t\t<strong>Balance:</strong>\n\t\t<br>\n\t\t{{ balance }}\n\t</p>\n\n\t<hr>\n\n\t<h1>Transactions</h1>\n\t<p *ngIf=\"transactions.length === 0\">This wallet has made no transactions (yet)</p>\n\t<app-transactions-table\n\t\t[transactions]=\"transactions\"\n\t\t*ngIf=\"transactions.length > 0\"\n\t></app-transactions-table>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>dashboard works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-top:40px;\">\n  <div class=\"col-lg-12\">\n    <h1 style=\"font-weight:inherit; font-size: 40px; font-weight: bold\"></h1>\n    <!-- <div class=\"col-sm-12\">\n        Solving Global Climatic Crisis Empowering Women\n      </div> --></div>\n</div>\n<div class=\"row\">\n  <div class=\"mt-4 col-md-12\"></div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-6\">\n    <h4 style=\"color: #28c3d4; text-align: center;\">Solving Global Climatic Crisis Empowering Women</h4>\n\n    <br />\n    <p style=\"font-size: 20px; justify-content: center\">51% of humanity comrises of women and girls. To meet the most ambitious target of the Paris Climatic Change Agreement and to limit warming to well below 2°C, it is critical that the needs, perspectives, and ideas of women, as well as of men, are included in climate action to create just, effective and sustainable solutions.\n      <br>To address the problem, Its a trap introduces a digital ecosystem which not only addresses the issue of global climate change but focuses to build a sustainable model where women learn, seek assistance, implement and earn.</p>\n  </div>\n  <div class=\"col-sm-6\">\n  <div class=\"slide\" id=\"1\">\n      <div class=\"content first-content\">\n        <div class=\"container-fluid\">\n          <div class=\"earth \">\n            <!-- <div class=\"earth--shadow\"></div> -->\n          </div>\n          <div class=\"moon\"></div>\n          <div class=\"stars\"></div>\n          <!--                   <div class=\"col-md-9\">\n                  <h2>Mingalar par</h2>\n                  <p>Lorem ipsum <em>dolor sit amet</em>, consectetur adipiscing elit. <em>Sed vehicula blandit augue,</em> eu maximus odio tempus vitae.</p>\n                  <div class=\"main-btn\"><a href=\"#2\">Read More</a></div>\n                  <div class=\"fb-btn\"><a href=\"https://www.facebook.com/templatemo/\" target=\"_blank\">Our FB Page</a></div>\n              </div> -->\n      </div>\n    </div>\n    </div>\n</div>\n<!-- <div class=\"stars small\"></div>\n<div class=\"stars medium\"></div>\n<div class=\"stars large\"></div> -->\n<!-- <div class=\"wrapper\">\n  <div class=\"earth\">\n    <i class=\"fas fa-globe-americas\"></i>\n    <div class=\"face\">\n      <div></div>\n    </div>\n  </div>\n  <div class=\"moon\">\n    <div class=\"face\">\n      <div></div>\n    </div>\n  </div>\n</div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/lms/lms.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/lms/lms.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"courses-section spad\">\n    <div class=\"container\">\n        <div class=\"sec-title text-center\">\n            <h2>Your Courses</h2>\n        </div>\n        <div class=\"course-slider owl-carousel\">\n            <!-- course -->\n            <div class=\"course-item \">\n                <figure class=\"course-preview\">\n                    <img src=\"../../assets/courses/9.jpg\" alt=\"\">\n                </figure>\n            \n                <div class=\"course-content\">\n                    <div class=\"cc-text\">\n                        <h5>Sustainable Use of Resources</h5>\n                        <p>This course teaches about the importance of depleting natural resources and practices that lead to sustainable use of these reources. </p>\n                        <span><i class=\"flaticon-student-2\"></i>20</span>\n                        <span><i class=\"flaticon-placeholder\"></i>3</span>\n                        <div class=\"rating\">\n                            <i class=\"fa fa-star\"></i>\n                            <i class=\"fa fa-star\"></i>\n                            <i class=\"fa fa-star\"></i>\n                            <i class=\"fa fa-star\"></i>\n                            <i class=\"fa fa-star i-fade\"></i>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- course -->\n            <div class=\"course-item\">\n                <figure class=\"course-preview\">\n                    <img src=\"../../assets/courses/2.jpg\" alt=\"\">\n                </figure>\n                <div class=\"course-content\">\n                    <div class=\"cc-text\">\n                        <h5>Pollution</h5>\n                        <p>This course teaches about practices and substances/materials that lead to pollution and teaches practices that cut down on pollution. </p>\n                        <span><i class=\"flaticon-student-2\"></i>20</span>\n                        <span><i class=\"flaticon-placeholder\"></i>3</span>\n                        <div class=\"rating\">\n                            <i class=\"fa fa-star\"></i>\n                            <i class=\"fa fa-star\"></i>\n                            <i class=\"fa fa-star\"></i>\n                            <i class=\"fa fa-star\"></i>\n                            <i class=\"fa fa-star i-fade\"></i>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- course -->\n            <div class=\"course-item\">\n                <figure class=\"course-preview\">\n                    <img src=\"../../assets/courses/3.jpg\" alt=\"\">\n                </figure>\n                <div class=\"course-content\">\n                    <div class=\"cc-text\">\n                        <h5>Digital Literacy</h5>\n                        <p>This course teaches people the basics of using the internet to communicate, gather information and use it as a means of business. </p>\n                        <span><i class=\"flaticon-student-2\"></i>20</span>\n                        <span><i class=\"flaticon-placeholder\"></i>3</span>\n                        <div class=\"rating\">\n                            <i class=\"fa fa-star\"></i>\n                            <i class=\"fa fa-star\"></i>\n                            <i class=\"fa fa-star\"></i>\n                            <i class=\"fa fa-star\"></i>\n                            <i class=\"fa fa-star i-fade\"></i>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- course -->\n            <div class=\"course-item\">\n                <figure class=\"course-preview\">\n                    <img src=\"../../assets/courses/4.jpg\" alt=\"\">\n                </figure>\n                <div class=\"course-content\">\n                    <div class=\"cc-text\">\n                        <h5>Rain Water Harvesting</h5>\n                        <p>This course helps people to follow basics of rainwater harvesting in everyday life and also teaches them about the value of water as a commodity. </p>\n                        <span><i class=\"flaticon-student-2\"></i>20</span>\n                        <span><i class=\"flaticon-placeholder\"></i>3</span>\n                        <div class=\"rating\">\n                            <i class=\"fa fa-star\"></i>\n                            <i class=\"fa fa-star\"></i>\n                            <i class=\"fa fa-star\"></i>\n                            <i class=\"fa fa-star\"></i>\n                            <i class=\"fa fa-star i-fade\"></i>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- course -->\n            <!-- course -->\n            <div class=\"course-item\">\n                <figure class=\"course-preview\">\n                    <img src=\"../../assets/courses/7.jpg\" alt=\"\">\n                </figure>\n                <div class=\"course-content\">\n                    <div class=\"cc-text\">\n                        <h5>Women Health and Sanitation</h5>\n                        <p>This course teaches women about the importance of physical, mental, and social wellbeing and how to lead a healthy life by following basic practices. </p>\n                        <span><i class=\"flaticon-student-2\"></i>20</span>\n                        <span><i class=\"flaticon-placeholder\"></i>3</span>\n                        <div class=\"rating\">\n                            <i class=\"fa fa-star\"></i>\n                            <i class=\"fa fa-star\"></i>\n                            <i class=\"fa fa-star\"></i>\n                            <i class=\"fa fa-star\"></i>\n                            <i class=\"fa fa-star i-fade\"></i>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- course -->\n            <div class=\"course-item\">\n                <figure class=\"course-preview\">\n                    <img src=\"../../assets/courses/10.jpg\" alt=\"\">\n                </figure>\n                <div class=\"course-content\">\n                    <div class=\"cc-text\">\n                        <h5>Basics of Marketing</h5>\n                        <p>This course teaches people the necessary skills to start selling products or services, using competent and basic marketing techniques. </p>\n                        <span><i class=\"flaticon-student-2\"></i>20</span>\n                        <span><i class=\"flaticon-placeholder\"></i>3</span>\n                        <div class=\"rating\">\n                            <i class=\"fa fa-star\"></i>\n                            <i class=\"fa fa-star\"></i>\n                            <i class=\"fa fa-star\"></i>\n                            <i class=\"fa fa-star\"></i>\n                            <i class=\"fa fa-star i-fade\"></i>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login-fund-shg/login-fund-shg.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login-fund-shg/login-fund-shg.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n    <li *ngFor=\"let shg of shgs\">\n        \n        \n        <h3>{{shg.name}}</h3>\n        <p>{{shg.about}}</p>\n        \n        <!-- CHOOSE A SHG LINK. ROUTE TO login-fund COMPONENT AFTER THIS WITH THIS shg's ID OR ENTIRE DATA -->\n        <a>DONATE</a>\n    </li>\n</ul>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login-fund/login-fund.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login-fund/login-fund.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--            BLOCKCHAIN PAGE             -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login-join-shg/login-join-shg.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login-join-shg/login-join-shg.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n    <li *ngFor=\"let shg of shgs\">\n        \n        \n        \n        <div class=\"container\">\n            <div class=\"row profile\">\n                <div class=\"col-md-3\" style=\"border: 1px solid black;\">\n                    <div class=\"profile-sidebar\">\n                        <!-- SIDEBAR USERPIC -->\n                        <div class=\"profile-userpic\">\n                            <img src=\"https://gravatar.com/avatar/31b64e4876d603ce78e04102c67d6144?s=80&d=https://codepen.io/assets/avatars/user-avatar-80x80-bdcd44a3bfb9a5fd01eb8b86f9e033fa1a9897c3a15b33adfc2649a002dab1b6.png\" class=\"img-responsive\" alt=\"\" style=\"\n                            /* position: absolute; */\n                            margin-left: 34px;\n                        \">\n                        </div>\n                        <!-- END SIDEBAR USERPIC -->\n                        <!-- SIDEBAR USER TITLE -->\n                        <div class=\"profile-usertitle\">\n                            <div class=\"profile-usertitle-name\">\n                                <h3>{{shg.name}}</h3>\n                            </div>\n                            <div class=\"profile-usertitle-job\">\n                                <p>{{shg.about}}</p>\n                            </div>\n                        </div>\n                        <!-- END SIDEBAR USER TITLE -->\n                        <!-- SIDEBAR BUTTONS -->\n                        <div class=\"profile-userbuttons\" style=\"margin-bottom: 10px;\">\n                            <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"joinTheSHG(shg._id)\">Join</button>\n                            <!-- <button type=\"button\" class=\"btn btn-success btn-sm\">Join</button> -->\n                            <button type=\"button\" class=\"btn btn-danger btn-sm\">Message</button>\n                        </div>\n                        <!-- END SIDEBAR BUTTONS -->\n                        <!-- SIDEBAR MENU -->\n                        <!-- <div class=\"profile-usermenu\"> -->\n                            <!-- <ul class=\"nav\">\n                                <li class=\"active\">\n                                    <a href=\"#\">\n                                    <i class=\"glyphicon glyphicon-home\"></i>\n                                    Overview </a>\n                                </li> -->\n                                <!-- <li>\n                                    <a href=\"https://codepen.io/jasondavis/pen/jVRwaG?editors=1000\">\n                                    <i class=\"glyphicon glyphicon-user\"></i>\n                                    Account Settings </a>\n                                </li> -->\n                                <!-- <li>\n                                    <a href=\"#\" target=\"_blank\">\n                                    <i class=\"glyphicon glyphicon-ok\"></i>\n                                    Tasks </a>\n                                </li>\n                                <li>\n                                    <a href=\"#\">\n                                    <i class=\"glyphicon glyphicon-flag\"></i>\n                                    Help </a>\n                                </li> -->\n                            <!-- </ul>\n                        </div> -->\n                        <!-- END MENU -->\n                       \n                   <div class=\"portlet light bordered\">\n                                                        <!-- STAT -->\n                                                        <div class=\"row list-separated profile-stat\">\n                                                            <div class=\"col-md-4 col-sm-4 col-xs-6\">\n                                                                <div class=\"uppercase profile-stat-title\"> 6 </div>\n                                                                <div class=\"uppercase profile-stat-text\"> Members </div>\n                                                            </div>\n                                                            <div class=\"col-md-4 col-sm-4 col-xs-6\">\n                                                                <div class=\"uppercase profile-stat-title\"> 51 </div>\n                                                                <div class=\"uppercase profile-stat-text\"> Trainings </div>\n                                                            </div>\n                                                            <div class=\"col-md-4 col-sm-4 col-xs-6\">\n                                                                <div class=\"uppercase profile-stat-title\"> 61 </div>\n                                                                <div class=\"uppercase profile-stat-text\"> Goals Met </div>\n                                                            </div>\n                                                        </div>\n                                                        <!-- END STAT -->\n                                                         <div>\n                                                            <h4 class=\"profile-desc-title\">About </h4>\n                                                            <span class=\"profile-desc-text\"> Working with Women of Dibrugarh to help bring scientific practises of irrigation to their district </span>\n                                                          \n                                                            \n                                                            </div></div>                   \n                                                   \n                \n                \n                    </div>\n                </div>\n                <!-- <div class=\"col-md-9\">\n                    <div class=\"profile-content\">\n                       Some user related content goes here...\n                    </div>\n                </div> -->\n            </div>\n        </div>\n        \n        <!-- JOIN LINK. ROUTE TO login-my-shg COMPONENT AFTER THIS WITH THIS shg's ID OR ENTIRE DATA -->\n        <!-- <button (click)=\"joinTheSHG(shg._id)\">JOIN</button> -->\n    </li>\n</ul>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login-my-shg/login-my-shg.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login-my-shg/login-my-shg.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h1>{{manager.first_name}} {{manager.last_name}}</h1>\n<span>Email : {{manager.email}}</span>\n<span>Age : {{manager.age}}</span>\n<span>Sex : {{manager.sex}}</span>\n<span>Address : {{manager.address}}</span>\n<span>Country : {{manager.counrty}}</span>\n<span>Phone Number : {{manager.phone_number}}</span> -->\n\n<!-- <hr>\n<hr>\n<hr>\n\n<h2>{{mentor.first_name}} {{mentor.last_name}}</h2>\n<span>Email : {{mentor.email}}</span>\n<span>Age : {{mentor.age}}</span>\n<span>Sex : {{mentor.sex}}</span>\n<span>Address : {{mentor.address}}</span>\n<span>Country : {{mentor.counrty}}</span>\n<span>Phone Number : {{mentor.phone_number}}</span>\n<p>About : {{mentor.about}}</p>\n\n<hr> -->\n<!-- \n<h3>SHG : {{shg.name}}</h3>\n<p>About : {{shg.about}}</p>\n<span>Address : {{shg.address}}</span>\n<span>Country : {{shg.country}}</span>\n<span>Amount : {{shg.amount}}</span> -->\n\n<div class=\"row\">\n<div class=\"col-sm-6\" style=\"margin-top: 305px;\">\n<div class=\"frame\">\n        <h4 style=\"text-align: center; color:black; font-family: bold; font-size: 30px\">Mentor Details</h4>\n    <div class=\"center\">\n      <div class=\"card\">\n        <div class=\"left\">\n          <div class=\"avatar\">\n            <div class=\"circle\"></div>\n            <div class=\"circle\"></div>\n            <img src=\"https://pbs.twimg.com/profile_images/894730722271010816/1g-2p3_m_400x400.jpg\" />\n          </div>\n          <div class=\"info\">\n            <span class=\"big\">{{mentor.first_name}} {{mentor.last_name}}</span><span class=\"small\">Email : {{mentor.email}}</span>\n          </div>\n          <!-- <div class=\"buttons\">\n            <button class=\"flw\">follow</button><button class=\"msg\">message</button>\n          </div> -->\n        </div>\n        <div class=\"right\">\n          <div class=\"stats posts\" >\n            <span class=\"big\">51</span><span class=\"small\">Trainings Complete</span>\n          </div>\n          <div class=\"stats likes\">\n            <span class=\"big\">{{mentor.phone_number}}</span><span class=\"small\">Phone Number</span>\n          </div>\n          <div class=\"stats flwrs\">\n            <span class=\"big\">B52/1 </span><span class=\"small\">Address</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- <h4>SHG</h4> -->\n<div class=\"col-sm-6\" style=\"margin-top: 305px;\">\n        <div class=\"frame\">\n            <h4 style=\"text-align: center; color:black; font-family: bold; font-size: 30px\">SHG</h4>\n        \n        <div class=\"center\">\n          <div class=\"card\">\n              \n            <div class=\"left\">\n              <div class=\"avatar\">\n                <div class=\"circle\"></div>\n                <div class=\"circle\"></div>\n                <img src=\"https://pbs.twimg.com/profile_images/894730722271010816/1g-2p3_m_400x400.jpg\" />\n              </div>\n              <div class=\"info\">\n                <span class=\"big\">{{shg.name}}</span><span class=\"small\">About : {{shg.about}}</span>\n              </div>\n              <!-- <div class=\"buttons\">\n                <button class=\"flw\">follow</button><button class=\"msg\">message</button>\n              </div> -->\n            </div>\n            <div class=\"right\">\n              <div class=\"stats posts\" style=\"\n              margin-top: 44px;\n          \">\n                <span class=\"big\">6</span><span class=\"small\">Members</span>\n              </div>\n              <div class=\"stats likes\">\n                <span class=\"big\">32</span><span class=\"small\">Projects Undertaken</span>\n              </div>\n              <!-- <div class=\"stats flwrs\">\n                <span class=\"big\">B52/1 </span><span class=\"small\">Address</span>\n              </div> -->\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-top:40px; padding:20px;\">\n    <div class=\"col-lg-12\" style=\"text-align:center;\">\n      <h1 style=\"font-weight:inherit; font-size: 55px;\">Login to your Account</h1>\n      <div class=\"col-sm-12\" style=\"color: #28c3d4; font-weight: bold\">\n          Solving Global Climatic Crisis Empowering Women\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"mt-4 col-md-12\">\n    </div>\n  </div>\n  \n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-2\">\n      </div>\n      <div class=\"col-md-8\">\n\n  \n          <div class=\"input-group\">\n            <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">EMAIL</label>\n            <input class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" id=\"email\" type=\"email\" placeholder=\"Your Email\">\n  \n          </div>\n          <div class=\"input-group\">\n            <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">PASSWORD</label>\n            <input class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" id=\"password\" type=\"password\"\n              placeholder=\"Your Password\">\n  \n          </div>\n  \n          <div class=\"mt-4 col-md-12\">\n  \n          </div>\n          <div class=\"input-group\">\n            <button class=\"btn btn-lg form-control\" style=\"background-color: #28c3d4;\" (click)=\"loginUser()\">LOGIN</button>\n  \n          </div>\n  \n          <div class=\"input-group\">\n            <button class=\"btn btn-primary form-control btn-lg\" style=\"background-color: rgb(0, 95, 213)\" [routerLink]=\"['/home']\">BACK TO HOME</button>\n          </div>\n      </div>\n      <div class=\"col-md-2\">\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/manager/manager-dashboard/manager-dashboard.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/manager/manager-dashboard/manager-dashboard.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ul>\n    <li *ngFor=\"let mentor_shg of mentors_shgs;\">\n        Mentor Name : {{mentor_shg.mentor.first_name}} {{mentor_shg.mentor.last_name}} \n        SHG Name : {{mentor_shg.shg.name}}\n\n        LINK TO THE manager-mentor_shg COMPONENT ALONG WITH THE DATA OF mentor AND shg\n        <a>\n\n        </a>\n    </li>\n</ul> -->\n\n<!-- <div class=\"container\">\n        <div class=\"row\">\n                Name: {{ manager?.first_name }} {{ mentor?.last_name }}\n            </div>\n            <div class=\"row\">\n                    Total Mentors Count: {{mentor?.mentors.length || 0}}\n                </div>\n    <div class=\"row\">\n        Pending Mentors Count: {{mentor?.pending_mentors.length || 0}}\n        </div>\n        <div class=\"row\">\n            Pending SHGs Count: {{mentor?.pending_shgs.length || 0}}\n            </div>\n</div> -->\n\n<div class=\"container\" style=\"margin-top: 5%;\">\n    <div class=\"row\">\n    <div class=\"col-md-3\" *ngFor=\"let mentor of mentor_shg\" style=\"border: 1px solid; width: 200px; margin-left: 25px; margin-right: 25px\">\n\n        <div class=\"row\">\n                <label class=\"btn form-control\" style=\"background-color: #28c3d4\">Mentor Name</label>\n                <h5 style=\"margin-left: 20px;\">{{mentor?.mentor?.first_name}} {{mentor?.mentor?.last_name}} </h5>\n        </div>\n\n        <div class=\"row\">\n                <label class=\"btn form-control\" style=\"background-color: #28c3d4\">SHG Name</label>\n                <h5 style=\"margin-left: 20px;\">{{mentor?.shg?.name || 'No SHGs Joined'}}</h5>\n        </div>\n\n\n        <!-- LINK TO THE manager-mentor_shg COMPONENT ALONG WITH THE DATA OF mentor AND shg -->\n        <a [routerLink]=\"['/manager/mentor/shg/detail', mentor.mentor._id]\"\n        routerLinkActive=\"router-link-active\">\n            View Details\n        </a>\n    </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/manager/manager-login/manager-login.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/manager/manager-login/manager-login.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-top:40px; padding:20px;\">\n    <div class=\"col-lg-12\" style=\"text-align:center;\">\n      <h1 style=\"font-weight:inherit; font-size: 55px;\">Login to your Manager Account</h1>\n      <div class=\"col-sm-12\" style=\"color: #28c3d4; font-weight: bold\">\n            Solving Global Climatic Crisis Empowering Women\n        </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"mt-4 col-md-12\">\n    </div>\n  </div>\n  \n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-2\">\n      </div>\n      <div class=\"col-md-8\">\n\n  \n          <div class=\"input-group\">\n            <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">EMAIL</label>\n            <input class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" id=\"email\" type=\"email\" placeholder=\"Your Email\">\n  \n          </div>\n          <div class=\"input-group\">\n            <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">PASSWORD</label>\n            <input class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" id=\"password\" type=\"password\"\n              placeholder=\"Your Password\">\n  \n          </div>\n  \n          <div class=\"mt-4 col-md-12\">\n  \n          </div>\n          <div class=\"input-group\">\n            <button class=\"btn btn-lg form-control\" style=\"background-color: #28c3d4\" (click)=\"loginManager()\">LOGIN</button>\n  \n          </div>\n  \n          <div class=\"input-group\">\n            <button class=\"btn btn-primary form-control btn-lg\" style=\"background-color: rgb(0, 95, 213)\" [routerLink]=\"['/home']\">BACK TO HOME</button>\n          </div>\n      </div>\n      <div class=\"col-md-2\">\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/manager/manager-mentor-shg-detail/manager-mentor-shg-detail.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/manager/manager-mentor-shg-detail/manager-mentor-shg-detail.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"this.mentor && this.shg\">\n<h2>{{this.mentor?.first_name}} {{mentor.last_name}}</h2>\n<span>Email : {{mentor.email}}</span>\n<span>Age : {{mentor.age}}</span>\n<span>Sex : {{mentor.sex}}</span>\n<span>Address : {{mentor.address}}</span>\n<span>Country : {{mentor.counrty}}</span>\n<span>Phone Number : {{mentor.phone_number}}</span>\n<p>About : {{mentor.about}}</p>\n\n<hr>\n\n<h3>SHG : {{shg.name}}</h3>\n<p>About : {{shg.about}}</p>\n<span>Address : {{shg.address}}</span>\n<span>Country : {{shg.country}}</span>\n<span>Amount : {{shg.amount}}</span>\n<h5>Logs :- </h5>\n<ul *ngIf=\"shg.logs\">\n    <li *ngFor=\"let log of shg.logs\">\n        {{log}}\n    </li>\n</ul>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/manager/manager-pending-mentors/manager-pending-mentors.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/manager/manager-pending-mentors/manager-pending-mentors.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n    <li *ngFor=\"let pending_mentor of pending_mentors\">\n        <h3>{{pending_mentor.first_name}} {{pending_mentor.last_name}}</h3>\n        <span>Email : {{pending_mentor.email}}</span>\n        <span>Age : {{pending_mentor.age}}</span>\n        <span>Sex : {{pending_mentor.sex}}</span>\n        <span>Address : {{pending_mentor.address}}</span>\n        <span>Country : {{pending_mentor.country}}</span>\n        <span>Phone Number : {{pending_mentor.phone_number}}</span>\n        <p>About : {{pending_mentor.about}}</p>\n        <button (click)=\"acceptMentor(pending_mentor._id)\">ACCEPT</button>\n        <button (click)=\"rejectMentor(pending_mentor._id)\">REJECT</button>\n    </li>\n</ul>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/manager/manager-pending-shgs/manager-pending-shgs.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/manager/manager-pending-shgs/manager-pending-shgs.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ul>\n    <li *ngFor=\"let pending_shg of pending_shgs\">\n        <h3>SHG : {{pending_shg.name}}</h3>\n        <p>About : {{pending_shg.about}}</p>\n        <span>Address : {{pending_shg.address}}</span>\n        <span>Country : {{pending_shg.country}}</span>\n        <span>Amount : {{pending_shg.amount}}</span>\n    </li>\n</ul> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/manager/manager-signup/manager-signup.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/manager/manager-signup/manager-signup.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-top:40px; padding:20px;\">\n    <div class=\"col-lg-12\" style=\"text-align:center;\">\n      <h1 style=\"font-weight:inherit; font-size: 55px;\">Create your new Manager Account</h1>\n      <div class=\"col-sm-12\" style=\"color: #28c3d4; font-weight: bold\">\n            Solving Global Climatic Crisis Empowering Women\n        </div>\n    </div>\n  </div>\n  \n  <div class=\"row\">\n    <div class=\"mt-4 col-md-12\">\n  \n    </div>\n  \n  </div>\n  \n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-2\">\n      </div>\n      <div class=\"col-md-8\">\n  \n  \n          <div class=\"input-group\">\n  \n  \n            <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">FIRST NAME</label>\n            <input class=\"form-control\" name=\"first_name\" [(ngModel)]=\"first_name\" id=\"firstname\" type=\"text\"\n              placeholder=\"Your First Name\">\n  \n          </div>\n\n          <div class=\"input-group\">\n  \n  \n                <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">LAST NAME</label>\n                <input class=\"form-control\" name=\"last_name\" [(ngModel)]=\"last_name\" id=\"lastname\" type=\"text\"\n                  placeholder=\"Your Last Name\">\n      \n              </div>\n          <div class=\"input-group\">\n            <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">EMAIL</label>\n            <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" id=\"email_\" placeholder=\"Your Email\">\n  \n  \n          </div>\n          <div class=\"input-group\">\n                <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">AGE</label>\n                <input type=\"number\" class=\"form-control\" [(ngModel)]=\"age\" name=\"age\" id=\"age\" placeholder=\"Your Age\">\n      \n      \n              </div>\n                        <div class=\"input-group\">\n                <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">SEX</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"sex\" name=\"sex\" id=\"sex\" placeholder=\"Your Sex\">\n      \n      \n              </div>\n                  <div class=\"input-group\">\n                        <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">ADDRESS</label>\n                        <input type=\"text\" [(ngModel)]=\"address\" class=\"form-control\" name=\"address\" id=\"address\" placeholder=\"Your Address\">\n              \n              \n                      </div>\n                      <div class=\"input-group\">\n                            <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">COUNTRY</label>\n                            <input type=\"text\" [(ngModel)]=\"country\" class=\"form-control\" name=\"country\" id=\"country\" placeholder=\"Your Country\">\n                  \n                  \n                          </div>\n                          <div class=\"input-group\">\n                            <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">CONTACT NUMBER</label>\n                            <input type=\"number\" [(ngModel)]=\"phone_number\" class=\"form-control\" name=\"contact\" id=\"contact\" placeholder=\"Your Contact Number\">\n                  \n                  \n                          </div>\n                          <div class=\"input-group\">\n                                <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">ABOUT</label>\n                                <textarea type=\"text\" [(ngModel)]=\"about\" class=\"form-control\" name=\"about\" id=\"about\" placeholder=\"Please write a few lines about yourself...\"></textarea>\n                      \n                      \n                              </div>\n          <div class=\"input-group\">\n            <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">PASSWORD</label>\n            <input type=\"password\" [(ngModel)]=\"password\" class=\"form-control\" name=\"password\" id=\"password_\"\n              placeholder=\"Your Password\">\n  \n          </div>\n          <div class=\"input-group\">\n            <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">CONFIRM PASSWORD</label>\n            <input type=\"password\" class=\"form-control\" name=\"cpass\" id=\"cpass_\" placeholder=\"Confirm Password\">\n  \n          </div>\n          <div class=\"mt-4 col-md-12\">\n  \n          </div>\n          <div class=\"input-group\">\n            <button class=\"btn btn-lg form-control\" type=\"submit\" style=\"background-color: #28c3d4\" (click)=\"signupManager()\">CREATE\n              ACCOUNT</button>\n  \n          </div>\n          <div class=\"input-group\">\n            <button class=\"btn btn-primary form-control btn-lg\" style=\"background-color: rgb(0, 95, 213)\" [routerLink]=\"['/home']\">BACK TO HOME</button>\n          </div>\n  \n      </div>\n      <div class=\"col-md-2\">\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/manager/manager.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/manager/manager.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>manager works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/mentor/mentor-apply-shg/mentor-apply-shg.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mentor/mentor-apply-shg/mentor-apply-shg.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--        SHG FORM        -->\n\n<div class=\"container\">\n    <div></div>\n</div>\n\n\n<!--        REDIRECT TO mentor-my-shg COMPONENT     -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/mentor/mentor-lms/mentor-lms.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mentor/mentor-lms/mentor-lms.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>mentor-lms works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/mentor/mentor-login/mentor-login.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mentor/mentor-login/mentor-login.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-top:40px; padding:20px;\">\n    <div class=\"col-lg-12\" style=\"text-align:center;\">\n      <h1 style=\"font-weight:inherit; font-size: 55px;\">Login to your Mentor Account</h1>\n      <div class=\"col-sm-12\" style=\"color: #28c3d4; font-weight: bold\">\n            Solving Global Climatic Crisis Empowering Women\n        </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"mt-4 col-md-12\">\n    </div>\n  </div>\n  \n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-2\">\n      </div>\n      <div class=\"col-md-8\">\n\n  \n          <div class=\"input-group\">\n            <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">EMAIL</label>\n            <input class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" id=\"email\" type=\"email\" placeholder=\"Your Email\">\n  \n          </div>\n          <div class=\"input-group\">\n            <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">PASSWORD</label>\n            <input class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" id=\"password\" type=\"password\"\n              placeholder=\"Your Password\">\n  \n          </div>\n  \n          <div class=\"mt-4 col-md-12\">\n  \n          </div>\n          <div class=\"input-group\">\n            <button class=\"btn btn-lg form-control\" style=\"background-color: #28c3d4\" (click)=\"loginMentor()\">LOGIN</button>\n  \n          </div>\n  \n          <div class=\"input-group\">\n            <button class=\"btn btn-primary form-control btn-lg\" style=\"background-color: rgb(0, 95, 213)\" [routerLink]=\"['/home']\">BACK TO HOME</button>\n          </div>\n      </div>\n      <div class=\"col-md-2\">\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/mentor/mentor-my-shg/mentor-my-shg.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mentor/mentor-my-shg/mentor-my-shg.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngIF=\"!SHGaccepted\">\n    <h2>SHG Not Accepted By The Manager Yet!</h2>\n</div>\n\n<div *ngIF=\"SHGaccepted\">\n    <h3>SHG : {{shg.name}}</h3>\n    <p>About : {{shg.about}}</p>\n    <span>Address : {{shg.address}}</span>\n    <span>Country : {{shg.country}}</span>\n    <span>Amount : {{shg.amount}}</span>\n</div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/mentor/mentor-signup/mentor-signup.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mentor/mentor-signup/mentor-signup.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-top:40px; padding:20px;\">\n    <div class=\"col-lg-12\" style=\"text-align:center;\">\n      <h1 style=\"font-weight:inherit; font-size: 55px;\">Create your new Mentor Account</h1>\n      <div class=\"col-sm-12\" style=\"color: #28c3d4; font-weight: bold\">\n            Solving Global Climatic Crisis Empowering Women\n        </div>\n    </div>\n  </div>\n  \n  <div class=\"row\">\n    <div class=\"mt-4 col-md-12\">\n  \n    </div>\n  \n  </div>\n  \n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-2\">\n      </div>\n      <div class=\"col-md-8\">\n  \n  \n          <div class=\"input-group\">\n  \n  \n            <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">FIRST NAME</label>\n            <input class=\"form-control\" [(ngModel)]=\"first_name\" name=\"first_name\" id=\"firstname\" type=\"text\"\n              placeholder=\"Your First Name\">\n  \n          </div>\n\n          <div class=\"input-group\">\n  \n  \n                <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">LAST NAME</label>\n                <input class=\"form-control\" [(ngModel)]=\"last_name\" name=\"last_name\" id=\"lastname\" type=\"text\"\n                  placeholder=\"Your Last Name\">\n      \n              </div>\n          <div class=\"input-group\">\n            <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">EMAIL</label>\n            <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" id=\"email_\" placeholder=\"Your Email\">\n  \n  \n          </div>\n          <div class=\"input-group\">\n                <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">AGE</label>\n                <input type=\"number\" class=\"form-control\" [(ngModel)]=\"age\" name=\"age\" id=\"age\" placeholder=\"Your Age\">\n      \n      \n              </div>\n                        <div class=\"input-group\">\n                <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">SEX</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"sex\" name=\"sex\" id=\"sex\" placeholder=\"Your Sex\">\n      \n      \n              </div>\n                  <div class=\"input-group\">\n                        <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">ADDRESS</label>\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"address\" name=\"address\" id=\"address\" placeholder=\"Your Address\">\n              \n              \n                      </div>\n                      <div class=\"input-group\">\n                            <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">COUNTRY</label>\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"country\" name=\"country\" id=\"country\" placeholder=\"Your Country\">\n                  \n                  \n                          </div>\n                          <div class=\"input-group\">\n                            <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">CONTACT NUMBER</label>\n                            <input type=\"number\" class=\"form-control\" [(ngModel)]=\"phone_number\" name=\"contact\" id=\"contact\" placeholder=\"Your Contact Number\">\n                  \n                  \n                          </div>\n                          <div class=\"input-group\">\n                                <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">ABOUT</label>\n                                <textarea type=\"text\" [(ngModel)]=\"about\" class=\"form-control\" name=\"about\" id=\"about\" placeholder=\"Please write a few lines about yourself...\"></textarea>\n                      \n                      \n                              </div>\n          <div class=\"input-group\">\n            <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">PASSWORD</label>\n            <input type=\"password\" [(ngModel)]=\"password\" class=\"form-control\" name=\"password\" id=\"password_\"\n              placeholder=\"Your Password\">\n  \n          </div>\n          <div class=\"input-group\">\n            <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">CONFIRM PASSWORD</label>\n            <input type=\"password\" class=\"form-control\" name=\"cpass\" id=\"cpass_\" placeholder=\"Confirm Password\">\n  \n          </div>\n          <div class=\"mt-4 col-md-12\">\n  \n          </div>\n          <div class=\"input-group\">\n            <button class=\"btn btn-lg form-control\" type=\"submit\" style=\"background-color: #28c3d4\" (click)=\"signupMentor()\">CREATE\n              ACCOUNT</button>\n  \n          </div>\n          <div class=\"input-group\">\n            <button class=\"btn btn-primary form-control btn-lg\" style=\"background-color: rgb(0, 95, 213)\" [routerLink]=\"['/home']\">BACK TO HOME</button>\n          </div>\n  \n      </div>\n      <div class=\"col-md-2\">\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/mentor/mentor.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mentor/mentor.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>mentor works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n    <span class=\"nav-button\">\n        \t&#9776;\n        </span>\n    <ul class=\"nav\" role=\"navigation\" *ngIf=\"current_user=='home'\">\n      <li class=\"active\">\n          <!-- <img src=\"../../assets/home.png\" class=\"img img-responsive feed-avatar\"> -->\n        <a [routerLink]=\"['/home']\" routerLinkActive=\"router-link-active\" >Home</a>\n      </li>\n\n      <li>\n        <a [routerLink]=\"['/login']\" routerLinkActive=\"router-link-active\" >Login</a>\n        <ul class=\"nav__sub\">\n          <li>\n            <a [routerLink]=\"['/login']\" routerLinkActive=\"router-link-active\" >User</a>\n          </li>\n          <li>\n            <a [routerLink]=\"['/login-mentor']\" routerLinkActive=\"router-link-active\" >Mentor</a>\n          </li>\n          <li>\n            <a [routerLink]=\"['/login-manager']\" routerLinkActive=\"router-link-active\" >Manager</a>\n          </li>\n        </ul>\n      </li>\n      <li>\n        <a [routerLink]=\"['/signup']\" routerLinkActive=\"router-link-active\" >Signup</a>\n        <ul class=\"nav__sub\">\n          <li>\n            <a [routerLink]=\"['/signup']\" routerLinkActive=\"router-link-active\" >User</a>\n          </li>\n          <li>\n            <a [routerLink]=\"['/signup-mentor']\" routerLinkActive=\"router-link-active\" >Mentor</a>\n          </li>\n          <li>\n            <a [routerLink]=\"['/signup-manager']\" routerLinkActive=\"router-link-active\" >Manager</a>\n          </li>\n        </ul>\n      </li>\n      <li>\n          <a [routerLink]=\"['/transaction']\" routerLinkActive=\"router-link-active\">Transactions</a>\n        </li>\n        <li>\n            <a [routerLink]=\"['/lms']\" routerLinkActive=\"router-link-active\">e-Learning</a>\n          </li>\n          <li class=\"active\">\n            <a [routerLink]=\"['/achievements']\" routerLinkActive=\"router-link-active\" >Climate Champions</a>\n          </li>\n      <li>\n        <a href=\"#\">contact</a>\n      </li>\n    </ul>\n\n\n\n    <ul class=\"nav\" role=\"navigation\" *ngIf=\"current_user=='manager'\">\n        <li class=\"active\">\n            <a [routerLink]=\"['manager/dashboard/agriculture']\" routerLinkActive=\"router-link-active\" >Agriculture</a>\n          </li>\n          <li class=\"active\">\n              <a [routerLink]=\"['manager/dashboard/vegetation']\" routerLinkActive=\"router-link-active\" >Vegetation</a>\n            </li>\n      <li class=\"active\">\n        <a [routerLink]=\"['/manager/dashboard']\" routerLinkActive=\"router-link-active\" >Mentors</a>\n      </li>\n      <li>\n        <a >Pending</a>\n        <ul class=\"nav__sub\">\n          <li>\n            <a [routerLink]=\"['/manager/dashboard/pending/mentors']\" routerLinkActive=\"router-link-active\" >Mentors</a>\n          </li>\n          <li>\n            <a [routerLink]=\"['/manager/dashboard/pending/shg']\" routerLinkActive=\"router-link-active\" >SHGs</a>\n          </li>\n        </ul>\n      </li>\n      <li class=\"active\">\n        <a [routerLink]=\"['/home']\" routerLinkActive=\"router-link-active\" (click)=\"logOut()\">Log Out</a>\n      </li>\n    </ul>\n\n\n\n    <ul class=\"nav\" role=\"navigation\" *ngIf=\"current_user=='user'\">\n      <li class=\"active\">\n        <a [routerLink]=\"['/user/join-shg']\" routerLinkActive=\"router-link-active\" *ngIf=\"!partOfSHG\">Join SHG</a>\n      </li>\n      <li class=\"active\">\n          <a [routerLink]=\"['/user/my-shg']\" routerLinkActive=\"router-link-active\" *ngIf=\"partOfSHG\">My SHG</a>\n      </li>\n      <li class=\"active\">\n          <a [routerLink]=\"['transaction']\" routerLinkActive=\"router-link-active\" >Raise Fund</a>\n      </li>\n      <li class=\"active\">\n          <a [routerLink]=\"['/home']\" routerLinkActive=\"router-link-active\" (click)=logOut()>Log Out</a>\n      </li>\n    </ul>\n\n\n\n    <ul class=\"nav\" role=\"navigation\" *ngIf=\"current_user=='mentor'\">\n      <li class=\"active\">\n        <a [routerLink]=\"['/mentor/apply-shg']\" routerLinkActive=\"router-link-active\" *ngIf=\"!hasCreatedSHG\">Apply for SHG</a>\n      </li>\n      <li class=\"active\">\n          <a [routerLink]=\"['/mentor/my-shg']\" routerLinkActive=\"router-link-active\" *ngIf=\"hasCreatedSHG\">My SHG</a>\n      </li>\n      <li class=\"active\">\n          <a [routerLink]=\"['/mentor/lms']\" routerLinkActive=\"router-link-active\" >LMS</a>\n      </li>\n      <li class=\"active\">\n          <a [routerLink]=\"['/home']\" routerLinkActive=\"router-link-active\" (click)=logOut()>Log Out</a>\n      </li>\n    </ul>\n\n\n\n    \n  </nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signup/signup.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-top:40px; padding:20px;\">\n    <div class=\"col-lg-12\" style=\"text-align:center;\">\n      <h1 style=\"font-weight:inherit; font-size: 55px;\">Create your new User Account</h1>\n      <div class=\"col-sm-12\" style=\"color: #28c3d4; font-weight: bold\">\n          Solving Global Climatic Crisis Empowering Women\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"row\">\n    <div class=\"mt-4 col-md-12\">\n  \n    </div>\n  \n  </div>\n  \n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-2\">\n      </div>\n      <div class=\"col-md-8\">\n  \n  \n          <div class=\"input-group\">\n  \n  \n            <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">FIRST NAME</label>\n            <input class=\"form-control\" [(ngModel)]=\"first_name\" name=\"first_name\" id=\"firstname\" type=\"text\"\n              placeholder=\"Your First Name\">\n  \n          </div>\n\n          <div class=\"input-group\">\n  \n  \n                <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">LAST NAME</label>\n                <input class=\"form-control\" [(ngModel)]=\"last_name\" name=\"last_name\" id=\"lastname\" type=\"text\"\n                  placeholder=\"Your Last Name\">\n      \n              </div>\n          <div class=\"input-group\">\n            <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">EMAIL</label>\n            <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" id=\"email_\" placeholder=\"Your Email\">\n  \n  \n          </div>\n          <div class=\"input-group\">\n                <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">AGE</label>\n                <input type=\"number\" class=\"form-control\" [(ngModel)]=\"age\" name=\"age\" id=\"age\" placeholder=\"Your Age\">\n      \n      \n              </div>\n                        <div class=\"input-group\">\n                <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">SEX</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"sex\" name=\"sex\" id=\"sex\" placeholder=\"Your Sex\">\n      \n      \n              </div>\n                  <div class=\"input-group\">\n                        <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">ADDRESS</label>\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"address\" name=\"address\" id=\"address\" placeholder=\"Your Address\">\n              \n              \n                      </div>\n                      <div class=\"input-group\">\n                            <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">COUNTRY</label>\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"country\" name=\"country\" id=\"country\" placeholder=\"Your Country\">\n                  \n                  \n                          </div>\n                          <div class=\"input-group\">\n                            <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">CONTACT NUMBER</label>\n                            <input type=\"number\" class=\"form-control\" [(ngModel)]=\"contact\" name=\"contact\" id=\"contact\" placeholder=\"Your Contact Number\">\n                  \n                  \n                          </div>\n          <div class=\"input-group\">\n            <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">PASSWORD</label>\n            <input type=\"password\" [(ngModel)]=\"password\" class=\"form-control\" name=\"password\" id=\"password_\"\n              placeholder=\"Your Password\">\n  \n          </div>\n          <div class=\"input-group\">\n            <label class=\"btn-primary btn-lg form-control\" style=\"background-color: rgb(0, 95, 213)\">CONFIRM PASSWORD</label>\n            <input type=\"password\" class=\"form-control\" name=\"cpass\" id=\"cpass_\" placeholder=\"Confirm Password\">\n  \n          </div>\n          <div class=\"mt-4 col-md-12\">\n  \n          </div>\n          <div class=\"input-group\">\n            <button class=\"btn btn-lg form-control\" type=\"submit\" style=\"background-color: #28c3d4\" (click)=\"signupUser()\">CREATE\n              ACCOUNT</button>\n  \n          </div>\n          <div class=\"input-group\">\n            <button class=\"btn btn-primary form-control btn-lg\" style=\"background-color: rgb(0, 95, 213)\" [routerLink]=\"['/home']\">BACK TO HOME</button>\n          </div>\n  \n      </div>\n      <div class=\"col-md-2\">\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/vegetation/vegetation.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vegetation/vegetation.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n        Select State    \n        \n        </div>\n        <select [(ngModel)]=\"state\" class=\"dropdown\">\n                <option value=\"Haryana\">Haryana</option>\n              </select>\n        \n              <div class=\"row\">\n                    Select District \n                    \n                    </div>\n                    <select [(ngModel)]=\"district\">\n                            <option value=\"Ambala\">Ambala</option>\n                            <option value=\"Bhiwani\">Bhiwani</option>\n                            <option value=\"Faridabad\">Faridabad</option>\n                            <option value=\"Gurgaon\">Gurgaon</option>\n                            <option value=\"Karnal\">Karnal</option>\n                          </select>\n        \n        \n              <div class=\"row\">\n                    Select Month \n                    \n                    </div>\n                    <select [(ngModel)]=\"month\">\n        \n                            <option value=\"Jan\">Jan</option>\n                            <option value=\"Feb\">Feb</option>\n                            <option value=\"Mar\">Mar</option>\n                            <option value=\"Apr\">Apr</option>\n                            <option value=\"May\">May</option>\n                            <option value=\"Jun\">Jun</option>\n                            <option value=\"Jul\">Jul</option>\n                            <option value=\"Aug\">Aug</option>\n                            <option value=\"Sept\">Sept</option>\n                            <option value=\"Oct\">Oct</option>\n                            <option value=\"Nov\">Nov</option>\n                            <option value=\"Dec\">Dec</option>\n                          </select>\n                          <button (click)=\"predict()\">Predict Output</button>"

/***/ }),

/***/ "./src/app/agriculture/agriculture.component.scss":
/*!********************************************************!*\
  !*** ./src/app/agriculture/agriculture.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FncmljdWx0dXJlL2FncmljdWx0dXJlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/agriculture/agriculture.component.ts":
/*!******************************************************!*\
  !*** ./src/app/agriculture/agriculture.component.ts ***!
  \******************************************************/
/*! exports provided: AgricultureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgricultureComponent", function() { return AgricultureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_shared_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/manager.service */ "./src/shared/manager.service.ts");



let AgricultureComponent = class AgricultureComponent {
    constructor(managerService) {
        this.managerService = managerService;
    }
    ngOnInit() {
    }
    predict() {
        //console.log(this.crop, this.state);
        this.managerService.getRainfallJSON()
            .subscribe((res) => {
            this.value = this.crop;
            console.log(this.value);
            this.managerService.getJSON()
                .subscribe((resp) => {
                for (var i in resp) {
                    if (this.crop === resp[i]['type'] && resp[i]['rainfall'] < this.value) {
                        console.log(resp[i]);
                        // this.managerService.getRainfallJSON()
                        // .subscribe((resp)=>{})
                    }
                }
                //console.log(this.value);
            });
        });
    }
};
AgricultureComponent.ctorParameters = () => [
    { type: src_shared_manager_service__WEBPACK_IMPORTED_MODULE_2__["ManagerService"] }
];
AgricultureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-agriculture',
        template: __webpack_require__(/*! raw-loader!./agriculture.component.html */ "./node_modules/raw-loader/index.js!./src/app/agriculture/agriculture.component.html"),
        styles: [__webpack_require__(/*! ./agriculture.component.scss */ "./src/app/agriculture/agriculture.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_shared_manager_service__WEBPACK_IMPORTED_MODULE_2__["ManagerService"]])
], AgricultureComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _blockchain_pages_blockchain_viewer_blockchain_viewer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blockchain/pages/blockchain-viewer/blockchain-viewer.component */ "./src/app/blockchain/pages/blockchain-viewer/blockchain-viewer.component.ts");
/* harmony import */ var _blockchain_pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blockchain/pages/settings/settings.component */ "./src/app/blockchain/pages/settings/settings.component.ts");
/* harmony import */ var _blockchain_pages_create_transaction_create_transaction_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blockchain/pages/create-transaction/create-transaction.component */ "./src/app/blockchain/pages/create-transaction/create-transaction.component.ts");
/* harmony import */ var _blockchain_pages_pending_transactions_pending_transactions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blockchain/pages/pending-transactions/pending-transactions.component */ "./src/app/blockchain/pages/pending-transactions/pending-transactions.component.ts");
/* harmony import */ var _blockchain_pages_wallet_balance_wallet_balance_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blockchain/pages/wallet-balance/wallet-balance.component */ "./src/app/blockchain/pages/wallet-balance/wallet-balance.component.ts");
/* harmony import */ var _manager_manager_login_manager_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./manager/manager-login/manager-login.component */ "./src/app/manager/manager-login/manager-login.component.ts");
/* harmony import */ var _manager_manager_signup_manager_signup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./manager/manager-signup/manager-signup.component */ "./src/app/manager/manager-signup/manager-signup.component.ts");
/* harmony import */ var _mentor_mentor_login_mentor_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mentor/mentor-login/mentor-login.component */ "./src/app/mentor/mentor-login/mentor-login.component.ts");
/* harmony import */ var _mentor_mentor_signup_mentor_signup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mentor/mentor-signup/mentor-signup.component */ "./src/app/mentor/mentor-signup/mentor-signup.component.ts");
/* harmony import */ var _manager_manager_dashboard_manager_dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./manager/manager-dashboard/manager-dashboard.component */ "./src/app/manager/manager-dashboard/manager-dashboard.component.ts");
/* harmony import */ var _manager_manager_pending_mentors_manager_pending_mentors_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./manager/manager-pending-mentors/manager-pending-mentors.component */ "./src/app/manager/manager-pending-mentors/manager-pending-mentors.component.ts");
/* harmony import */ var _manager_manager_pending_shgs_manager_pending_shgs_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./manager/manager-pending-shgs/manager-pending-shgs.component */ "./src/app/manager/manager-pending-shgs/manager-pending-shgs.component.ts");
/* harmony import */ var _lms_lms_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lms/lms.component */ "./src/app/lms/lms.component.ts");
/* harmony import */ var _manager_manager_mentor_shg_detail_manager_mentor_shg_detail_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./manager/manager-mentor-shg-detail/manager-mentor-shg-detail.component */ "./src/app/manager/manager-mentor-shg-detail/manager-mentor-shg-detail.component.ts");
/* harmony import */ var _agriculture_agriculture_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./agriculture/agriculture.component */ "./src/app/agriculture/agriculture.component.ts");
/* harmony import */ var _login_login_join_shg_login_join_shg_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./login/login-join-shg/login-join-shg.component */ "./src/app/login/login-join-shg/login-join-shg.component.ts");
/* harmony import */ var _login_login_my_shg_login_my_shg_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./login/login-my-shg/login-my-shg.component */ "./src/app/login/login-my-shg/login-my-shg.component.ts");
/* harmony import */ var _login_login_fund_shg_login_fund_shg_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./login/login-fund-shg/login-fund-shg.component */ "./src/app/login/login-fund-shg/login-fund-shg.component.ts");
/* harmony import */ var _login_login_fund_login_fund_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./login/login-fund/login-fund.component */ "./src/app/login/login-fund/login-fund.component.ts");
/* harmony import */ var _vegetation_vegetation_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./vegetation/vegetation.component */ "./src/app/vegetation/vegetation.component.ts");


























const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'login-mentor', component: _mentor_mentor_login_mentor_login_component__WEBPACK_IMPORTED_MODULE_13__["MentorLoginComponent"] },
    { path: 'login-manager', component: _manager_manager_login_manager_login_component__WEBPACK_IMPORTED_MODULE_11__["ManagerLoginComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    // { path: 'transaction1', component: BlockchainComponent},
    { path: 'signup-mentor', component: _mentor_mentor_signup_mentor_signup_component__WEBPACK_IMPORTED_MODULE_14__["MentorSignupComponent"] },
    { path: 'signup-manager', component: _manager_manager_signup_manager_signup_component__WEBPACK_IMPORTED_MODULE_12__["ManagerSignupComponent"] },
    { path: 'transaction', component: _blockchain_pages_blockchain_viewer_blockchain_viewer_component__WEBPACK_IMPORTED_MODULE_6__["BlockchainViewerComponent"] },
    { path: 'settings', component: _blockchain_pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_7__["SettingsComponent"] },
    { path: 'new/transaction', component: _blockchain_pages_create_transaction_create_transaction_component__WEBPACK_IMPORTED_MODULE_8__["CreateTransactionComponent"] },
    { path: 'new/transaction/pending', component: _blockchain_pages_pending_transactions_pending_transactions_component__WEBPACK_IMPORTED_MODULE_9__["PendingTransactionsComponent"] },
    { path: 'wallet/:address', component: _blockchain_pages_wallet_balance_wallet_balance_component__WEBPACK_IMPORTED_MODULE_10__["WalletBalanceComponent"] },
    { path: 'manager/dashboard', component: _manager_manager_dashboard_manager_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["ManagerDashboardComponent"] },
    { path: 'manager/dashboard/pending/mentors', component: _manager_manager_pending_mentors_manager_pending_mentors_component__WEBPACK_IMPORTED_MODULE_16__["ManagerPendingMentorsComponent"] },
    { path: 'manager/dashboard/pending/shg', component: _manager_manager_pending_shgs_manager_pending_shgs_component__WEBPACK_IMPORTED_MODULE_17__["ManagerPendingShgsComponent"] },
    { path: 'lms', component: _lms_lms_component__WEBPACK_IMPORTED_MODULE_18__["LmsComponent"] },
    { path: 'manager/mentor/shg/detail/:id', component: _manager_manager_mentor_shg_detail_manager_mentor_shg_detail_component__WEBPACK_IMPORTED_MODULE_19__["ManagerMentorShgDetailComponent"] },
    { path: 'manager/dashboard/agriculture', component: _agriculture_agriculture_component__WEBPACK_IMPORTED_MODULE_20__["AgricultureComponent"] },
    { path: 'user/join-shg', component: _login_login_join_shg_login_join_shg_component__WEBPACK_IMPORTED_MODULE_21__["LoginJoinShgComponent"] },
    { path: 'user/my-shg', component: _login_login_my_shg_login_my_shg_component__WEBPACK_IMPORTED_MODULE_22__["LoginMyShgComponent"] },
    { path: 'user/fund-shg', component: _login_login_fund_shg_login_fund_shg_component__WEBPACK_IMPORTED_MODULE_23__["LoginFundShgComponent"] },
    { path: 'user/fund', component: _login_login_fund_login_fund_component__WEBPACK_IMPORTED_MODULE_24__["LoginFundComponent"] },
    { path: 'manager/dashboard/vegetation', component: _vegetation_vegetation_component__WEBPACK_IMPORTED_MODULE_25__["VegetationComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body, h1, h2, h3, h4, h5, h6, p {\n  color: black;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NodWJoYW0vUHJvamVjdHMvaXRzLWEtdHJhcC9wdWJsaWMvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFlBQUE7RUFDQSx3SUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcHtcblxuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIFxuICAgIH0gICAgIiwiYm9keSwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'client';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var src_shared_blockchain_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/shared/blockchain.service */ "./src/shared/blockchain.service.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");
/* harmony import */ var _agriculture_agriculture_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./agriculture/agriculture.component */ "./src/app/agriculture/agriculture.component.ts");
/* harmony import */ var _blockchain_blockchain_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./blockchain/blockchain.component */ "./src/app/blockchain/blockchain.component.ts");
/* harmony import */ var _blockchain_components_block_view_block_view_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./blockchain/components/block-view/block-view.component */ "./src/app/blockchain/components/block-view/block-view.component.ts");
/* harmony import */ var _blockchain_pages_blockchain_viewer_blockchain_viewer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./blockchain/pages/blockchain-viewer/blockchain-viewer.component */ "./src/app/blockchain/pages/blockchain-viewer/blockchain-viewer.component.ts");
/* harmony import */ var _blockchain_pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./blockchain/pages/settings/settings.component */ "./src/app/blockchain/pages/settings/settings.component.ts");
/* harmony import */ var _blockchain_pages_create_transaction_create_transaction_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./blockchain/pages/create-transaction/create-transaction.component */ "./src/app/blockchain/pages/create-transaction/create-transaction.component.ts");
/* harmony import */ var _blockchain_pages_pending_transactions_pending_transactions_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./blockchain/pages/pending-transactions/pending-transactions.component */ "./src/app/blockchain/pages/pending-transactions/pending-transactions.component.ts");
/* harmony import */ var _blockchain_pages_wallet_balance_wallet_balance_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./blockchain/pages/wallet-balance/wallet-balance.component */ "./src/app/blockchain/pages/wallet-balance/wallet-balance.component.ts");
/* harmony import */ var _blockchain_components_transactions_table_transactions_table_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./blockchain/components/transactions-table/transactions-table.component */ "./src/app/blockchain/components/transactions-table/transactions-table.component.ts");
/* harmony import */ var _mentor_mentor_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./mentor/mentor.component */ "./src/app/mentor/mentor.component.ts");
/* harmony import */ var _manager_manager_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./manager/manager.component */ "./src/app/manager/manager.component.ts");
/* harmony import */ var _mentor_mentor_login_mentor_login_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./mentor/mentor-login/mentor-login.component */ "./src/app/mentor/mentor-login/mentor-login.component.ts");
/* harmony import */ var _mentor_mentor_signup_mentor_signup_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./mentor/mentor-signup/mentor-signup.component */ "./src/app/mentor/mentor-signup/mentor-signup.component.ts");
/* harmony import */ var _manager_manager_signup_manager_signup_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./manager/manager-signup/manager-signup.component */ "./src/app/manager/manager-signup/manager-signup.component.ts");
/* harmony import */ var _manager_manager_login_manager_login_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./manager/manager-login/manager-login.component */ "./src/app/manager/manager-login/manager-login.component.ts");
/* harmony import */ var src_shared_auth_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! src/shared/auth.service */ "./src/shared/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _manager_manager_dashboard_manager_dashboard_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./manager/manager-dashboard/manager-dashboard.component */ "./src/app/manager/manager-dashboard/manager-dashboard.component.ts");
/* harmony import */ var _manager_manager_mentor_shg_detail_manager_mentor_shg_detail_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./manager/manager-mentor-shg-detail/manager-mentor-shg-detail.component */ "./src/app/manager/manager-mentor-shg-detail/manager-mentor-shg-detail.component.ts");
/* harmony import */ var _manager_manager_pending_mentors_manager_pending_mentors_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./manager/manager-pending-mentors/manager-pending-mentors.component */ "./src/app/manager/manager-pending-mentors/manager-pending-mentors.component.ts");
/* harmony import */ var _manager_manager_pending_shgs_manager_pending_shgs_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./manager/manager-pending-shgs/manager-pending-shgs.component */ "./src/app/manager/manager-pending-shgs/manager-pending-shgs.component.ts");
/* harmony import */ var src_shared_manager_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! src/shared/manager.service */ "./src/shared/manager.service.ts");
/* harmony import */ var _login_login_join_shg_login_join_shg_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./login/login-join-shg/login-join-shg.component */ "./src/app/login/login-join-shg/login-join-shg.component.ts");
/* harmony import */ var _login_login_my_shg_login_my_shg_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./login/login-my-shg/login-my-shg.component */ "./src/app/login/login-my-shg/login-my-shg.component.ts");
/* harmony import */ var _login_login_fund_shg_login_fund_shg_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./login/login-fund-shg/login-fund-shg.component */ "./src/app/login/login-fund-shg/login-fund-shg.component.ts");
/* harmony import */ var _login_login_fund_login_fund_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./login/login-fund/login-fund.component */ "./src/app/login/login-fund/login-fund.component.ts");
/* harmony import */ var _mentor_mentor_apply_shg_mentor_apply_shg_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./mentor/mentor-apply-shg/mentor-apply-shg.component */ "./src/app/mentor/mentor-apply-shg/mentor-apply-shg.component.ts");
/* harmony import */ var _mentor_mentor_my_shg_mentor_my_shg_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./mentor/mentor-my-shg/mentor-my-shg.component */ "./src/app/mentor/mentor-my-shg/mentor-my-shg.component.ts");
/* harmony import */ var _mentor_mentor_lms_mentor_lms_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./mentor/mentor-lms/mentor-lms.component */ "./src/app/mentor/mentor-lms/mentor-lms.component.ts");
/* harmony import */ var _lms_lms_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./lms/lms.component */ "./src/app/lms/lms.component.ts");
/* harmony import */ var src_shared_shg_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! src/shared/shg.service */ "./src/shared/shg.service.ts");
/* harmony import */ var src_shared_user_service__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! src/shared/user.service */ "./src/shared/user.service.ts");
/* harmony import */ var _vegetation_vegetation_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./vegetation/vegetation.component */ "./src/app/vegetation/vegetation.component.ts");















































const ngxUiLoaderConfig = {
    "bgsColor": "#28c3d4",
    "bgsOpacity": 0.9,
    "bgsPosition": "center-center",
    "bgsSize": 100,
    "bgsType": "three-bounce",
    "blur": 15,
    "fgsColor": "black",
    "fgsPosition": "center-center",
    "fgsSize": 60,
    "fgsType": "ball-spin-clockwise-fade-rotating",
    "gap": 24,
    "logoPosition": "center-center",
    "logoSize": 120,
    "overlayColor": "#28c3d4",
    "pbColor": "black",
    "pbDirection": "ltr",
    "pbThickness": 5,
    "hasProgressBar": false,
    "text": "Please Hold on...",
    "textColor": "black",
    "textPosition": "center-center",
};
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
            _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"],
            _agriculture_agriculture_component__WEBPACK_IMPORTED_MODULE_13__["AgricultureComponent"],
            _blockchain_blockchain_component__WEBPACK_IMPORTED_MODULE_14__["BlockchainComponent"],
            _blockchain_components_block_view_block_view_component__WEBPACK_IMPORTED_MODULE_15__["BlockViewComponent"],
            _blockchain_pages_blockchain_viewer_blockchain_viewer_component__WEBPACK_IMPORTED_MODULE_16__["BlockchainViewerComponent"],
            _blockchain_pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_17__["SettingsComponent"],
            _blockchain_components_transactions_table_transactions_table_component__WEBPACK_IMPORTED_MODULE_21__["TransactionsTableComponent"],
            _blockchain_pages_create_transaction_create_transaction_component__WEBPACK_IMPORTED_MODULE_18__["CreateTransactionComponent"],
            _blockchain_pages_pending_transactions_pending_transactions_component__WEBPACK_IMPORTED_MODULE_19__["PendingTransactionsComponent"],
            _blockchain_pages_wallet_balance_wallet_balance_component__WEBPACK_IMPORTED_MODULE_20__["WalletBalanceComponent"],
            _mentor_mentor_component__WEBPACK_IMPORTED_MODULE_22__["MentorComponent"],
            _manager_manager_component__WEBPACK_IMPORTED_MODULE_23__["ManagerComponent"],
            _mentor_mentor_login_mentor_login_component__WEBPACK_IMPORTED_MODULE_24__["MentorLoginComponent"],
            _mentor_mentor_signup_mentor_signup_component__WEBPACK_IMPORTED_MODULE_25__["MentorSignupComponent"],
            _manager_manager_signup_manager_signup_component__WEBPACK_IMPORTED_MODULE_26__["ManagerSignupComponent"],
            _manager_manager_login_manager_login_component__WEBPACK_IMPORTED_MODULE_27__["ManagerLoginComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_30__["DashboardComponent"],
            _manager_manager_dashboard_manager_dashboard_component__WEBPACK_IMPORTED_MODULE_31__["ManagerDashboardComponent"],
            _manager_manager_mentor_shg_detail_manager_mentor_shg_detail_component__WEBPACK_IMPORTED_MODULE_32__["ManagerMentorShgDetailComponent"],
            _manager_manager_pending_mentors_manager_pending_mentors_component__WEBPACK_IMPORTED_MODULE_33__["ManagerPendingMentorsComponent"],
            _manager_manager_pending_shgs_manager_pending_shgs_component__WEBPACK_IMPORTED_MODULE_34__["ManagerPendingShgsComponent"],
            _login_login_join_shg_login_join_shg_component__WEBPACK_IMPORTED_MODULE_36__["LoginJoinShgComponent"],
            _login_login_my_shg_login_my_shg_component__WEBPACK_IMPORTED_MODULE_37__["LoginMyShgComponent"],
            _login_login_fund_shg_login_fund_shg_component__WEBPACK_IMPORTED_MODULE_38__["LoginFundShgComponent"],
            _login_login_fund_login_fund_component__WEBPACK_IMPORTED_MODULE_39__["LoginFundComponent"],
            _mentor_mentor_apply_shg_mentor_apply_shg_component__WEBPACK_IMPORTED_MODULE_40__["MentorApplyShgComponent"],
            _mentor_mentor_my_shg_mentor_my_shg_component__WEBPACK_IMPORTED_MODULE_41__["MentorMyShgComponent"],
            _mentor_mentor_lms_mentor_lms_component__WEBPACK_IMPORTED_MODULE_42__["MentorLmsComponent"],
            _lms_lms_component__WEBPACK_IMPORTED_MODULE_43__["LmsComponent"],
            _vegetation_vegetation_component__WEBPACK_IMPORTED_MODULE_46__["VegetationComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpClientModule"],
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_12__["NgxUiLoaderModule"].forRoot(ngxUiLoaderConfig),
        ],
        providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_3__["HashLocationStrategy"] },
            src_shared_blockchain_service__WEBPACK_IMPORTED_MODULE_11__["BlockchainService"],
            src_shared_auth_service__WEBPACK_IMPORTED_MODULE_28__["AuthService"],
            src_shared_manager_service__WEBPACK_IMPORTED_MODULE_35__["ManagerService"],
            src_shared_shg_service__WEBPACK_IMPORTED_MODULE_44__["ShgService"],
            src_shared_user_service__WEBPACK_IMPORTED_MODULE_45__["UserService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/blockchain/blockchain.component.scss":
/*!******************************************************!*\
  !*** ./src/app/blockchain/blockchain.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2NrY2hhaW4vYmxvY2tjaGFpbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/blockchain/blockchain.component.ts":
/*!****************************************************!*\
  !*** ./src/app/blockchain/blockchain.component.ts ***!
  \****************************************************/
/*! exports provided: BlockchainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockchainComponent", function() { return BlockchainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_shared_blockchain_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/blockchain.service */ "./src/shared/blockchain.service.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");



src_shared_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"];

let BlockchainComponent = class BlockchainComponent {
    constructor(blockchainService, ngxService) {
        this.blockchainService = blockchainService;
        this.ngxService = ngxService;
        this.showInfoMessage = true;
        this.blockchain = blockchainService.blockchainInstance;
    }
    ngOnInit() {
        this.ngxService.start(); // start foreground loading with 'default' id
        // Stop the foreground loading after 5s
        setTimeout(() => {
            this.ngxService.stop(); // stop foreground loading with 'default' id
        }, 500);
    }
    thereArePendingTransactions() {
        return this.blockchain.pendingTransactions.length > 0;
    }
};
BlockchainComponent.ctorParameters = () => [
    { type: src_shared_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"] },
    { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderService"] }
];
BlockchainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-blockchain',
        template: __webpack_require__(/*! raw-loader!./blockchain.component.html */ "./node_modules/raw-loader/index.js!./src/app/blockchain/blockchain.component.html"),
        styles: [__webpack_require__(/*! ./blockchain.component.scss */ "./src/app/blockchain/blockchain.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_shared_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderService"]])
], BlockchainComponent);



/***/ }),

/***/ "./src/app/blockchain/components/block-view/block-view.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/blockchain/components/block-view/block-view.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  width: 18rem;\n  display: inline-block;\n  margin: 0 10px 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NodWJoYW0vUHJvamVjdHMvaXRzLWEtdHJhcC9wdWJsaWMvc3JjL2FwcC9ibG9ja2NoYWluL2NvbXBvbmVudHMvYmxvY2stdmlldy9ibG9jay12aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ibG9ja2NoYWluL2NvbXBvbmVudHMvYmxvY2stdmlldy9ibG9jay12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNDRCIsImZpbGUiOiJzcmMvYXBwL2Jsb2NrY2hhaW4vY29tcG9uZW50cy9ibG9jay12aWV3L2Jsb2NrLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcblx0d2lkdGg6IDE4cmVtOyBcblx0ZGlzcGxheTppbmxpbmUtYmxvY2s7IFxuXHRtYXJnaW46IDAgMTBweCAwIDA7XG59IiwiLmNhcmQge1xuICB3aWR0aDogMThyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIDEwcHggMCAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/blockchain/components/block-view/block-view.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/blockchain/components/block-view/block-view.component.ts ***!
  \**************************************************************************/
/*! exports provided: BlockViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockViewComponent", function() { return BlockViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_shared_blockchain_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/blockchain.service */ "./src/shared/blockchain.service.ts");



let BlockViewComponent = class BlockViewComponent {
    constructor(blockchainService) {
        this.blockchainService = blockchainService;
        this.blocksInChain = blockchainService.blockchainInstance.chain;
    }
    ngOnInit() {
    }
    blockHasTx() {
        return this.block.transactions.length > 0;
    }
    isSelectedBlock() {
        return this.block === this.selectedBlock;
    }
    getBlockNumber() {
        return this.blocksInChain.indexOf(this.block) + 1;
    }
};
BlockViewComponent.ctorParameters = () => [
    { type: src_shared_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], BlockViewComponent.prototype, "block", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], BlockViewComponent.prototype, "selectedBlock", void 0);
BlockViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-block-view',
        template: __webpack_require__(/*! raw-loader!./block-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/blockchain/components/block-view/block-view.component.html"),
        styles: [__webpack_require__(/*! ./block-view.component.scss */ "./src/app/blockchain/components/block-view/block-view.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_shared_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"]])
], BlockViewComponent);



/***/ }),

/***/ "./src/app/blockchain/components/transactions-table/transactions-table.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/blockchain/components/transactions-table/transactions-table.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2NrY2hhaW4vY29tcG9uZW50cy90cmFuc2FjdGlvbnMtdGFibGUvdHJhbnNhY3Rpb25zLXRhYmxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/blockchain/components/transactions-table/transactions-table.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/blockchain/components/transactions-table/transactions-table.component.ts ***!
  \******************************************************************************************/
/*! exports provided: TransactionsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsTableComponent", function() { return TransactionsTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_shared_blockchain_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/blockchain.service */ "./src/shared/blockchain.service.ts");



let TransactionsTableComponent = class TransactionsTableComponent {
    constructor(blockchainService) {
        this.blockchainService = blockchainService;
        this.transactions = [];
    }
    ngOnInit() {
    }
};
TransactionsTableComponent.ctorParameters = () => [
    { type: src_shared_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TransactionsTableComponent.prototype, "transactions", void 0);
TransactionsTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-transactions-table',
        template: __webpack_require__(/*! raw-loader!./transactions-table.component.html */ "./node_modules/raw-loader/index.js!./src/app/blockchain/components/transactions-table/transactions-table.component.html"),
        styles: [__webpack_require__(/*! ./transactions-table.component.scss */ "./src/app/blockchain/components/transactions-table/transactions-table.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_shared_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"]])
], TransactionsTableComponent);



/***/ }),

/***/ "./src/app/blockchain/pages/blockchain-viewer/blockchain-viewer.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/blockchain/pages/blockchain-viewer/blockchain-viewer.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2NrY2hhaW4vcGFnZXMvYmxvY2tjaGFpbi12aWV3ZXIvYmxvY2tjaGFpbi12aWV3ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/blockchain/pages/blockchain-viewer/blockchain-viewer.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/blockchain/pages/blockchain-viewer/blockchain-viewer.component.ts ***!
  \***********************************************************************************/
/*! exports provided: BlockchainViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockchainViewerComponent", function() { return BlockchainViewerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_blockchain_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/blockchain.service */ "./src/shared/blockchain.service.ts");



let BlockchainViewerComponent = class BlockchainViewerComponent {
    constructor(blockchainService) {
        this.blockchainService = blockchainService;
        this.blocks = [];
        this.selectedBlock = null;
        this.blocks = blockchainService.blockchainInstance.chain;
        this.selectedBlock = this.blocks[0];
        console.log(this.blocks);
    }
    ngOnInit() {
    }
    showTransactions(block) {
        console.log(block);
        this.selectedBlock = block;
        return false;
    }
    blockHasTx(block) {
        return block.transactions.length > 0;
    }
    selectedBlockHasTx() {
        return this.blockHasTx(this.selectedBlock);
    }
    isSelectedBlock(block) {
        return this.selectedBlock === block;
    }
    getBlockNumber(block) {
        return this.blocks.indexOf(block) + 1;
    }
};
BlockchainViewerComponent.ctorParameters = () => [
    { type: _shared_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"] }
];
BlockchainViewerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-blockchain-viewer',
        template: __webpack_require__(/*! raw-loader!./blockchain-viewer.component.html */ "./node_modules/raw-loader/index.js!./src/app/blockchain/pages/blockchain-viewer/blockchain-viewer.component.html"),
        styles: [__webpack_require__(/*! ./blockchain-viewer.component.scss */ "./src/app/blockchain/pages/blockchain-viewer/blockchain-viewer.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"]])
], BlockchainViewerComponent);



/***/ }),

/***/ "./src/app/blockchain/pages/create-transaction/create-transaction.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/blockchain/pages/create-transaction/create-transaction.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2NrY2hhaW4vcGFnZXMvY3JlYXRlLXRyYW5zYWN0aW9uL2NyZWF0ZS10cmFuc2FjdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/blockchain/pages/create-transaction/create-transaction.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/blockchain/pages/create-transaction/create-transaction.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CreateTransactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTransactionComponent", function() { return CreateTransactionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_blockchain_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/blockchain.service */ "./src/shared/blockchain.service.ts");
/* harmony import */ var savjeecoin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! savjeecoin */ "./node_modules/savjeecoin/src/blockchain.js");
/* harmony import */ var savjeecoin__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(savjeecoin__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");






let CreateTransactionComponent = class CreateTransactionComponent {
    constructor(blockchainService, router, ngxService) {
        this.blockchainService = blockchainService;
        this.router = router;
        this.ngxService = ngxService;
        this.newTx = new savjeecoin__WEBPACK_IMPORTED_MODULE_4__["Transaction"]();
        this.newTx = new savjeecoin__WEBPACK_IMPORTED_MODULE_4__["Transaction"]();
        this.ownWalletKey = blockchainService.walletKeys[0];
    }
    ngOnInit() {
        this.ngxService.start(); // start foreground loading with 'default' id
        // Stop the foreground loading after 5s
        setTimeout(() => {
            this.ngxService.stop(); // stop foreground loading with 'default' id
        }, 500);
    }
    createTransaction() {
        const newTx = this.newTx;
        // Set the FROM address and sign the transaction
        newTx.fromAddress = this.ownWalletKey.publicKey;
        newTx.signTransaction(this.ownWalletKey.keyObj);
        try {
            this.blockchainService.addTransaction(this.newTx);
        }
        catch (e) {
            alert(e);
            return;
        }
        this.router.navigate(['/new/transaction/pending', { addedTx: true }]);
        this.newTx = new savjeecoin__WEBPACK_IMPORTED_MODULE_4__["Transaction"]();
    }
};
CreateTransactionComponent.ctorParameters = () => [
    { type: _shared_blockchain_service__WEBPACK_IMPORTED_MODULE_3__["BlockchainService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_5__["NgxUiLoaderService"] }
];
CreateTransactionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-transaction',
        template: __webpack_require__(/*! raw-loader!./create-transaction.component.html */ "./node_modules/raw-loader/index.js!./src/app/blockchain/pages/create-transaction/create-transaction.component.html"),
        styles: [__webpack_require__(/*! ./create-transaction.component.scss */ "./src/app/blockchain/pages/create-transaction/create-transaction.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_blockchain_service__WEBPACK_IMPORTED_MODULE_3__["BlockchainService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_5__["NgxUiLoaderService"]])
], CreateTransactionComponent);



/***/ }),

/***/ "./src/app/blockchain/pages/pending-transactions/pending-transactions.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/blockchain/pages/pending-transactions/pending-transactions.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2NrY2hhaW4vcGFnZXMvcGVuZGluZy10cmFuc2FjdGlvbnMvcGVuZGluZy10cmFuc2FjdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/blockchain/pages/pending-transactions/pending-transactions.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/blockchain/pages/pending-transactions/pending-transactions.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: PendingTransactionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingTransactionsComponent", function() { return PendingTransactionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_blockchain_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/blockchain.service */ "./src/shared/blockchain.service.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");





let PendingTransactionsComponent = class PendingTransactionsComponent {
    constructor(blockchainService, router, route, ngxService) {
        this.blockchainService = blockchainService;
        this.router = router;
        this.route = route;
        this.ngxService = ngxService;
        this.pendingTransactions = [];
        this.miningInProgress = false;
        this.justAddedTx = false;
        this.pendingTransactions = blockchainService.getPendingTransactions();
    }
    ngOnInit() {
        this.ngxService.start(); // start foreground loading with 'default' id
        // Stop the foreground loading after 5s
        setTimeout(() => {
            this.ngxService.stop(); // stop foreground loading with 'default' id
        }, 500);
        if (this.route.snapshot.paramMap.get('addedTx')) {
            this.justAddedTx = true;
            setTimeout(() => {
                this.justAddedTx = false;
            }, 4000);
        }
    }
    minePendingTransactions() {
        this.miningInProgress = true;
        this.blockchainService.minePendingTransactions();
        this.miningInProgress = false;
        this.router.navigate(['/transaction']);
    }
};
PendingTransactionsComponent.ctorParameters = () => [
    { type: _shared_blockchain_service__WEBPACK_IMPORTED_MODULE_3__["BlockchainService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__["NgxUiLoaderService"] }
];
PendingTransactionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pending-transactions',
        template: __webpack_require__(/*! raw-loader!./pending-transactions.component.html */ "./node_modules/raw-loader/index.js!./src/app/blockchain/pages/pending-transactions/pending-transactions.component.html"),
        styles: [__webpack_require__(/*! ./pending-transactions.component.scss */ "./src/app/blockchain/pages/pending-transactions/pending-transactions.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_blockchain_service__WEBPACK_IMPORTED_MODULE_3__["BlockchainService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__["NgxUiLoaderService"]])
], PendingTransactionsComponent);



/***/ }),

/***/ "./src/app/blockchain/pages/settings/settings.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/blockchain/pages/settings/settings.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2NrY2hhaW4vcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/blockchain/pages/settings/settings.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/blockchain/pages/settings/settings.component.ts ***!
  \*****************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_blockchain_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/blockchain.service */ "./src/shared/blockchain.service.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");




let SettingsComponent = class SettingsComponent {
    constructor(blockchainService, ngxService) {
        this.blockchainService = blockchainService;
        this.ngxService = ngxService;
        this.blockchain = blockchainService.blockchainInstance;
    }
    ngOnInit() {
        this.ngxService.start(); // start foreground loading with 'default' id
        // Stop the foreground loading after 5s
        setTimeout(() => {
            this.ngxService.stop(); // stop foreground loading with 'default' id
        }, 500);
    }
};
SettingsComponent.ctorParameters = () => [
    { type: _shared_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"] },
    { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderService"] }
];
SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: __webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/index.js!./src/app/blockchain/pages/settings/settings.component.html"),
        styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/blockchain/pages/settings/settings.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderService"]])
], SettingsComponent);



/***/ }),

/***/ "./src/app/blockchain/pages/wallet-balance/wallet-balance.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/blockchain/pages/wallet-balance/wallet-balance.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2NrY2hhaW4vcGFnZXMvd2FsbGV0LWJhbGFuY2Uvd2FsbGV0LWJhbGFuY2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/blockchain/pages/wallet-balance/wallet-balance.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/blockchain/pages/wallet-balance/wallet-balance.component.ts ***!
  \*****************************************************************************/
/*! exports provided: WalletBalanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletBalanceComponent", function() { return WalletBalanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_blockchain_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/blockchain.service */ "./src/shared/blockchain.service.ts");




let WalletBalanceComponent = class WalletBalanceComponent {
    constructor(route, blockchainService) {
        this.route = route;
        this.blockchainService = blockchainService;
        this.walletAddress = '';
        this.balance = 0;
        this.transactions = [];
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.walletAddress = params['address'];
            const blockchain = this.blockchainService.blockchainInstance;
            this.balance = blockchain.getBalanceOfAddress(this.walletAddress);
            this.transactions = blockchain.getAllTransactionsForWallet(this.walletAddress);
        });
    }
};
WalletBalanceComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _shared_blockchain_service__WEBPACK_IMPORTED_MODULE_3__["BlockchainService"] }
];
WalletBalanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wallet-balance',
        template: __webpack_require__(/*! raw-loader!./wallet-balance.component.html */ "./node_modules/raw-loader/index.js!./src/app/blockchain/pages/wallet-balance/wallet-balance.component.html"),
        styles: [__webpack_require__(/*! ./wallet-balance.component.scss */ "./src/app/blockchain/pages/wallet-balance/wallet-balance.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _shared_blockchain_service__WEBPACK_IMPORTED_MODULE_3__["BlockchainService"]])
], WalletBalanceComponent);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DashboardComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  font-family: Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif;\n}\n\nhtml, body {\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: #000000;\n  background-image: radial-gradient(#292929, #000000);\n}\n\n.earth {\n  height: 200px;\n  width: 200px;\n  border-radius: 50%;\n  background-color: #3380B5;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  overflow: hidden;\n  z-index: 2;\n  box-shadow: inset -30px 0 rgba(0, 0, 0, 0.2), 0 0 0 120px rgba(20, 106, 221, 0.1), 0 0 0 180px rgba(20, 106, 221, 0.1);\n}\n\n/* Land */\n\n.earth-linear {\n  display: block;\n  width: 100px;\n  height: 100px;\n  background: pink;\n  border-radius: 50%;\n  background: radial-gradient(circle at 100px 100px, #f634cb, #fff);\n  -webkit-animation-name: roll;\n          animation-name: roll;\n  -webkit-animation-duration: 5s;\n          animation-duration: 5s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n}\n\n.earth:before {\n  content: \"\";\n  position: absolute;\n  background: #85C567;\n  height: 30px;\n  width: 75px;\n  left: 0;\n  top: 50px;\n  display: block;\n  border-radius: 40px;\n  -webkit-animation: rotateElement linear 25s infinite;\n          animation: rotateElement linear 25s infinite;\n  box-shadow: 0px 75px 0 -5px #85C567, 5px 35px 0 -3px #85C567, 35px 125px 0 -9px #85C567, 120px -15px 0 -7px #85C567, 135px -55px 0 -9px #85C567, 150px 25px 0 7px #85C567, 220px 70px 0 -2px #85C567, 235px -35px 0 -3px #85C567, 280px 85px 0 3px #85C567, 320px 30px 0 1px #85C567, 400px 0 0 0 #85C567, 400px 75px 0 -5px #85C567, 405px 35px 0 -3px #85C567, 435px 125px 0 -9px #85C567, 520px -15px 0 -7px #85C567, 535px -55px 0 -9px #85C567, 550px 25px 0 7px #85C567, 620px 70px 0 -2px #85C567, 635px -35px 0 -3px #85C567, 680px 85px 0 3px #85C567, 720px 30px 0 1px #85C567;\n}\n\n/* Clouds */\n\n.earth:after {\n  content: \"\";\n  position: absolute;\n  background: white;\n  height: 20px;\n  width: 60px;\n  left: 0px;\n  top: 50px;\n  display: block;\n  border-radius: 40px;\n  -webkit-animation: rotateElement linear 25s infinite;\n          animation: rotateElement linear 25s infinite;\n  box-shadow: 10px 50px 0 3px white, 50px -15px 0 2px white, 70px 70px 0 -1px white, 100px 25px 0 1px white, 110px 105px 0 -4px white, 140px 75px 0 -3px white, 250px -25px 0 -1px white, 210px 50px 0 1px white, 340px 130px 0 1px white, 400px 0px 0 0 white, 410px 50px 0 3px white, 500px 25px 0 1px white, 450px -15px 0 2px white, 470px 70px 0 -1px white, 540px 75px 0 -3px white, 510px 105px 0 -4px white, 650px -25px 0 -1px white, 610px 50px 0 1px white, 740px 130px 0 1px white;\n}\n\n.earth--shadow {\n  height: 100%;\n  width: 100%;\n  border-radius: 50%;\n  position: absolute;\n  background-color: transparent;\n  z-index: 4;\n  box-shadow: inset -30px 0 rgba(0, 0, 0, 0.1);\n}\n\n.moon {\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n  position: absolute;\n  background-color: #A5A5A5;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  overflow: auto;\n  z-index: 10;\n  box-shadow: inset -3px 0 rgba(0, 0, 0, 0.2);\n  -webkit-animation: moonOrbit ease-in-out 3s infinite;\n          animation: moonOrbit ease-in-out 3s infinite;\n}\n\n.moon:after {\n  content: \"\";\n  height: 5px;\n  width: 5px;\n  border-radius: 50%;\n  background: gray;\n  position: absolute;\n  top: 8px;\n  left: 10px;\n  box-shadow: -4px 3px 0 -1px gray, 4px 2px 0 -1px gray, -2px -6px 0 -1px gray;\n}\n\n.stars {\n  height: 10px;\n  width: 10px;\n  border-radius: 50%;\n  position: absolute;\n  background-color: white;\n  position: absolute;\n  top: 80%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  overflow: auto;\n  z-index: 1;\n  box-shadow: 510px -450px 0 1px white, 490px -125px 0 -2px white, 150px -150px 0 -1px white, 130px 270px 0 -1px white, 480px 475px 0 -3px white, -610px 605px 0 -4px white, 570px 750px 0 -3px white, -550px 425px 0 1px white, 650px -105px 0 -2px white, 310px 60px 0 -1px white, -340px 175px 0 -3px white, -610px 1205px 0 -4px white, 500px 450px 0 -3px white, -500px 125px 0 1px white, -150px -615px 0 -2px white, -110px -370px 0 -1px white, -440px -175px 0 -3px white, -610px -205px 0 -4px white, 410px -450px 0 -3px white, 390px -125px 0 -2px white, 50px -250px 0 -1px white, 30px -170px 0 -1px white, 380px 375px 0 -5px white, -710px 705px 0 -6px white, 470px -650px 0 -3px white, -450px 425px 0 1px white, 550px -205px 0 -5px white, 210px 50px 0 -1px white, -240px 275px 0 -5px white, -510px 120px 0 -4px white, 600px 550px 0 -3px white, -400px 225px 0 1px white, -250px -515px 0 -2px white, -310px -170px 0 -4px white, -340px -275px 0 -4px white, -510px -305px 0 -5px white;\n}\n\n.inspiration {\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  color: white;\n  font-size: 10px;\n}\n\n.inspiration a {\n  color: white;\n}\n\n@-webkit-keyframes rotateElement {\n  0% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n  }\n  100% {\n    -webkit-transform: translate(-400px, 0);\n            transform: translate(-400px, 0);\n  }\n}\n\n@keyframes rotateElement {\n  0% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n  }\n  100% {\n    -webkit-transform: translate(-400px, 0);\n            transform: translate(-400px, 0);\n  }\n}\n\n@-webkit-keyframes moonOrbit {\n  0% {\n    -webkit-transform: translate(-250px, 0);\n            transform: translate(-250px, 0);\n    z-index: 10;\n  }\n  20% {\n    z-index: -1;\n  }\n  50% {\n    -webkit-transform: translate(250px, 0);\n            transform: translate(250px, 0);\n  }\n  100% {\n    -webkit-transform: translate(-250px, 0);\n            transform: translate(-250px, 0);\n  }\n}\n\n@keyframes moonOrbit {\n  0% {\n    -webkit-transform: translate(-250px, 0);\n            transform: translate(-250px, 0);\n    z-index: 10;\n  }\n  20% {\n    z-index: -1;\n  }\n  50% {\n    -webkit-transform: translate(250px, 0);\n            transform: translate(250px, 0);\n  }\n  100% {\n    -webkit-transform: translate(-250px, 0);\n            transform: translate(-250px, 0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NodWJoYW0vUHJvamVjdHMvaXRzLWEtdHJhcC9wdWJsaWMvc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLHNFQUFBO0FDQUY7O0FESUE7RUFDRSxZQUFBO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDREo7O0FESUE7RUFDRSx5QkFBQTtFQUNBLG1EQUFBO0FDREY7O0FEZ0JBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxzSEFDRTtBQ2RGOztBRG9CQSxTQUFBOztBQUNBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlFQUFBO0VBQ0EsNEJBQUE7VUFBQSxvQkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtBQ2pCRjs7QURtQkE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxvREFBQTtVQUFBLDRDQUFBO0VBQ0Esd2pCQUNFO0FDakJGOztBRDJDQSxXQUFBOztBQUNBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0RBQUE7VUFBQSw0Q0FBQTtFQUNBLDRkQUNFO0FDekNGOztBRGdFQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLDRDQUNFO0FDOURGOztBRGlFQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLDJDQUFBO0VBQ0Esb0RBQUE7VUFBQSw0Q0FBQTtBQzlEQTs7QURnRUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLDRFQUNFO0FDOURGOztBRG1FQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLDg4QkFDRTtBQ2pFRjs7QUR1R0E7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNwR0E7O0FEc0dBO0VBQ0MsWUFBQTtBQ3BHRDs7QUR3R0E7RUFDQTtJQUFJLGtDQUFBO1lBQUEsMEJBQUE7RUNwR0Y7RURxR0Y7SUFBTSx1Q0FBQTtZQUFBLCtCQUFBO0VDbEdKO0FBQ0Y7O0FEK0ZBO0VBQ0E7SUFBSSxrQ0FBQTtZQUFBLDBCQUFBO0VDcEdGO0VEcUdGO0lBQU0sdUNBQUE7WUFBQSwrQkFBQTtFQ2xHSjtBQUNGOztBRG9HQTtFQUNBO0lBQUksdUNBQUE7WUFBQSwrQkFBQTtJQUFrQyxXQUFBO0VDaEdwQztFRGlHRjtJQUFLLFdBQUE7RUM5Rkg7RUQrRkY7SUFBSyxzQ0FBQTtZQUFBLDhCQUFBO0VDNUZIO0VENkZGO0lBQU0sdUNBQUE7WUFBQSwrQkFBQTtFQzFGSjtBQUNGOztBRHFGQTtFQUNBO0lBQUksdUNBQUE7WUFBQSwrQkFBQTtJQUFrQyxXQUFBO0VDaEdwQztFRGlHRjtJQUFLLFdBQUE7RUM5Rkg7RUQrRkY7SUFBSyxzQ0FBQTtZQUFBLDhCQUFBO0VDNUZIO0VENkZGO0lBQU0sdUNBQUE7WUFBQSwrQkFBQTtFQzFGSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XG5cbiAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcblxufVxuXG5odG1sLCBib2R5e1xuICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbmJvZHl7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudCgjMjkyOTI5LCAjMDAwMDAwKTtcbn1cblxuLy8gICBAZnVuY3Rpb24gYm94LXNoYWRvdygkc3RhcnMpIHtcbi8vICAgICAgICRieHNoYWRvdzogKCk7XG4vLyAgICAgICBAZm9yICRpIGZyb20gMSB0byAkc3RhcnMge1xuLy8gICAgICAgICAgICRieHNoYWRvdzogYXBwZW5kKCRieHNoYWRvdywgKHJhbmRvbSgyMDAwKSArIDBweCkgKHJhbmRvbSgyMDAwKSArIDBweCkgI2ZmZiwgY29tbWEpO1xuLy8gICAgICAgfVxuLy8gICAgICAgQHJldHVybiB1bnF1b3RlKCRieHNoYWRvdyk7XG4vLyAgIH1cblxuJGJ4c2hhZG93LWxhcmdlOiBib3gtc2hhZG93KDI1KTtcbiRieHNoYWRvdy1tZWRpdW06IGJveC1zaGFkb3coMTAwKTtcbiRieHNoYWRvdy1zbWFsbDogYm94LXNoYWRvdygxNTApO1xuXG4uZWFydGgge1xuaGVpZ2h0OiAyMDBweDtcbndpZHRoOiAyMDBweDtcbmJvcmRlci1yYWRpdXM6IDUwJTtcbmJhY2tncm91bmQtY29sb3I6ICMzMzgwQjU7XG5wb3NpdGlvbjogYWJzb2x1dGU7XG50b3A6IDUwJTtcbmxlZnQ6IDUwJTtcbnRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xub3ZlcmZsb3c6IGhpZGRlbjtcbnotaW5kZXg6MjtcbmJveC1zaGFkb3c6IFxuICBpbnNldCAtMzBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgXG4gIDAgMCAwIDEyMHB4IHJnYmEoMjAsIDEwNiwgMjIxLCAwLjEpLFxuICAwIDAgMCAxODBweCByZ2JhKDIwLCAxMDYsIDIyMSwgMC4xKSxcbiAgLy8gMCAwIDAgNTAwcHggcmdiYSgyMCwgMTA2LCAyMjEsIDAuMSk7XG59XG5cbi8qIExhbmQgKi9cbi5lYXJ0aC1saW5lYXJ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQ6IHBpbms7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAxMDBweCAxMDBweCwgI2Y2MzRjYiwgI2ZmZik7XG4gIGFuaW1hdGlvbi1uYW1lOiByb2xsO1xuICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xufVxuLmVhcnRoOmJlZm9yZSB7XG5jb250ZW50OiBcIlwiO1xucG9zaXRpb246IGFic29sdXRlO1xuYmFja2dyb3VuZDogIzg1QzU2NztcbmhlaWdodDogMzBweDtcbndpZHRoOiA3NXB4O1xubGVmdDogMDtcbnRvcDogNTBweDtcbmRpc3BsYXk6YmxvY2s7XG5ib3JkZXItcmFkaXVzOiA0MHB4O1xuYW5pbWF0aW9uOiByb3RhdGVFbGVtZW50IGxpbmVhciAyNXMgaW5maW5pdGU7XG5ib3gtc2hhZG93OiBcbiAgMHB4IDc1cHggMCAtNXB4ICM4NUM1NjcsXG4gIDVweCAzNXB4IDAgLTNweCAjODVDNTY3LCBcbiAgMzVweCAxMjVweCAwIC05cHggIzg1QzU2NyxcbiAgMTIwcHggLTE1cHggMCAtN3B4ICM4NUM1NjcsXG4gIDEzNXB4IC01NXB4IDAgLTlweCAjODVDNTY3LFxuICAxNTBweCAyNXB4IDAgN3B4ICM4NUM1NjcsXG4gIDIyMHB4IDcwcHggMCAtMnB4ICM4NUM1NjcsXG4gIDIzNXB4IC0zNXB4IDAgLTNweCAjODVDNTY3LFxuICAyODBweCA4NXB4IDAgM3B4ICM4NUM1NjcsXG4gIDMyMHB4IDMwcHggMCAxcHggIzg1QzU2NyxcbiAgXG4gIFxuICAvLyBDbG9uZXMgNDAwcHggb3ZlclxuICA0MDBweCAwIDAgMCAjODVDNTY3LFxuICA0MDBweCA3NXB4IDAgLTVweCAjODVDNTY3LFxuICA0MDVweCAzNXB4IDAgLTNweCAjODVDNTY3LCBcbiAgNDM1cHggMTI1cHggMCAtOXB4ICM4NUM1NjcsXG4gIDUyMHB4IC0xNXB4IDAgLTdweCAjODVDNTY3LFxuICA1MzVweCAtNTVweCAwIC05cHggIzg1QzU2NyxcbiAgNTUwcHggMjVweCAwIDdweCAjODVDNTY3LFxuICA2MjBweCA3MHB4IDAgLTJweCAjODVDNTY3LFxuICA2MzVweCAtMzVweCAwIC0zcHggIzg1QzU2NyxcbiAgNjgwcHggODVweCAwIDNweCAjODVDNTY3LFxuICA3MjBweCAzMHB4IDAgMXB4ICM4NUM1NjcsXG59XG5cbi8qIENsb3VkcyAqL1xuLmVhcnRoOmFmdGVyIHtcbmNvbnRlbnQ6IFwiXCI7XG5wb3NpdGlvbjogYWJzb2x1dGU7XG5iYWNrZ3JvdW5kOiB3aGl0ZTtcbmhlaWdodDogMjBweDtcbndpZHRoOiA2MHB4O1xubGVmdDogMHB4O1xudG9wOiA1MHB4O1xuZGlzcGxheTpibG9jaztcbmJvcmRlci1yYWRpdXM6IDQwcHg7XG5hbmltYXRpb246IHJvdGF0ZUVsZW1lbnQgbGluZWFyIDI1cyBpbmZpbml0ZTtcbmJveC1zaGFkb3c6XG4gIDEwcHggNTBweCAwIDNweCB3aGl0ZSwgXG4gIDUwcHggLTE1cHggMCAycHggd2hpdGUsXG4gIDcwcHggNzBweCAwIC0xcHggd2hpdGUsXG4gIDEwMHB4IDI1cHggMCAxcHggd2hpdGUsXG4gIDExMHB4IDEwNXB4IDAgLTRweCB3aGl0ZSxcbiAgMTQwcHggNzVweCAwIC0zcHggd2hpdGUsXG4gIDI1MHB4IC0yNXB4IDAgLTFweCB3aGl0ZSxcbiAgMjEwcHggNTBweCAwIDFweCB3aGl0ZSxcbiAgMzQwcHggMTMwcHggMCAxcHggd2hpdGUsXG5cbiAgLy8gQ2xvbmVzIDQwMHB4IG92ZXJcbiAgNDAwcHggMHB4IDAgMCB3aGl0ZSxcbiAgNDEwcHggNTBweCAwIDNweCB3aGl0ZSwgXG4gIDUwMHB4IDI1cHggMCAxcHggd2hpdGUsXG4gIDQ1MHB4IC0xNXB4IDAgMnB4IHdoaXRlLFxuICA0NzBweCA3MHB4IDAgLTFweCB3aGl0ZSxcbiAgNTQwcHggNzVweCAwIC0zcHggd2hpdGUsXG4gIDUxMHB4IDEwNXB4IDAgLTRweCB3aGl0ZSxcbiAgNjUwcHggLTI1cHggMCAtMXB4IHdoaXRlLFxuICA2MTBweCA1MHB4IDAgMXB4IHdoaXRlLFxuICA3NDBweCAxMzBweCAwIDFweCB3aGl0ZSxcbn1cblxuLmVhcnRoLS1zaGFkb3cge1xuaGVpZ2h0OiAxMDAlO1xud2lkdGg6IDEwMCU7XG5ib3JkZXItcmFkaXVzOiA1MCU7XG5wb3NpdGlvbjogYWJzb2x1dGU7XG5iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbnotaW5kZXg6IDQ7XG5ib3gtc2hhZG93OiBcbiAgaW5zZXQgLTMwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5tb29uIHtcbmhlaWdodDogMjBweDtcbndpZHRoOiAyMHB4O1xuYm9yZGVyLXJhZGl1czogNTAlO1xucG9zaXRpb246IGFic29sdXRlO1xuYmFja2dyb3VuZC1jb2xvcjogI0E1QTVBNTtcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcbnRvcDogNTAlO1xubGVmdDogNTAlO1xudHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5vdmVyZmxvdzogYXV0bztcbnotaW5kZXg6MTA7XG5ib3gtc2hhZG93OiBpbnNldCAtM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuYW5pbWF0aW9uOiBtb29uT3JiaXQgZWFzZS1pbi1vdXQgM3MgaW5maW5pdGU7XG59XG4ubW9vbjphZnRlciB7XG5jb250ZW50OiAnJztcbmhlaWdodDogNXB4O1xud2lkdGg6IDVweDtcbmJvcmRlci1yYWRpdXM6NTAlO1xuYmFja2dyb3VuZDogZ3JheTtcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcbnRvcDo4cHg7XG5sZWZ0OiAxMHB4O1xuYm94LXNoYWRvdzogXG4gIC00cHggM3B4IDAgLTFweCBncmF5LFxuICA0cHggMnB4IDAgLTFweCBncmF5LFxuICAtMnB4IC02cHggMCAtMXB4IGdyYXlcbn1cblxuLnN0YXJzIHtcbmhlaWdodDogMTBweDtcbndpZHRoOiAxMHB4O1xuYm9yZGVyLXJhZGl1czogNTAlO1xucG9zaXRpb246IGFic29sdXRlO1xuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5wb3NpdGlvbjogYWJzb2x1dGU7XG50b3A6IDgwJTtcbmxlZnQ6IDUwJTtcbnRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xub3ZlcmZsb3c6IGF1dG87XG56LWluZGV4OjE7XG5ib3gtc2hhZG93OiBcbiAgNTEwcHggLTQ1MHB4IDAgMXB4IHdoaXRlLCBcbiAgNDkwcHggLTEyNXB4IDAgLTJweCB3aGl0ZSxcbiAgMTUwcHggLTE1MHB4IDAgLTFweCB3aGl0ZSxcbiAgMTMwcHggMjcwcHggMCAtMXB4IHdoaXRlLFxuICA0ODBweCA0NzVweCAwIC0zcHggd2hpdGUsXG4gIC02MTBweCA2MDVweCAwIC00cHggd2hpdGUsXG4gIDU3MHB4IDc1MHB4IDAgLTNweCB3aGl0ZSwgXG4gIC01NTBweCA0MjVweCAwIDFweCB3aGl0ZSxcbiAgNjUwcHggLTEwNXB4IDAgLTJweCB3aGl0ZSxcbiAgMzEwcHggNjBweCAwIC0xcHggd2hpdGUsXG4gIC0zNDBweCAxNzVweCAwIC0zcHggd2hpdGUsXG4gIC02MTBweCAxMjA1cHggMCAtNHB4IHdoaXRlLFxuICA1MDBweCA0NTBweCAwIC0zcHggd2hpdGUsIFxuICAtNTAwcHggMTI1cHggMCAxcHggd2hpdGUsXG4gIC0xNTBweCAtNjE1cHggMCAtMnB4IHdoaXRlLFxuICAtMTEwcHggLTM3MHB4IDAgLTFweCB3aGl0ZSxcbiAgLTQ0MHB4IC0xNzVweCAwIC0zcHggd2hpdGUsXG4gIC02MTBweCAtMjA1cHggMCAtNHB4IHdoaXRlLFxuICA0MTBweCAtNDUwcHggMCAtM3B4IHdoaXRlLCBcbiAgMzkwcHggLTEyNXB4IDAgLTJweCB3aGl0ZSxcbiAgNTBweCAtMjUwcHggMCAtMXB4IHdoaXRlLFxuICAzMHB4IC0xNzBweCAwIC0xcHggd2hpdGUsXG4gIDM4MHB4IDM3NXB4IDAgLTVweCB3aGl0ZSxcbiAgLTcxMHB4IDcwNXB4IDAgLTZweCB3aGl0ZSxcbiAgNDcwcHggLTY1MHB4IDAgLTNweCB3aGl0ZSwgXG4gIC00NTBweCA0MjVweCAwIDFweCB3aGl0ZSxcbiAgNTUwcHggLTIwNXB4IDAgLTVweCB3aGl0ZSxcbiAgMjEwcHggNTBweCAwIC0xcHggd2hpdGUsXG4gIC0yNDBweCAyNzVweCAwIC01cHggd2hpdGUsXG4gIC01MTBweCAxMjBweCAwIC00cHggd2hpdGUsXG4gIDYwMHB4IDU1MHB4IDAgLTNweCB3aGl0ZSwgXG4gIC00MDBweCAyMjVweCAwIDFweCB3aGl0ZSxcbiAgLTI1MHB4IC01MTVweCAwIC0ycHggd2hpdGUsXG4gIC0zMTBweCAtMTcwcHggMCAtNHB4IHdoaXRlLFxuICAtMzQwcHggLTI3NXB4IDAgLTRweCB3aGl0ZSxcbiAgLTUxMHB4IC0zMDVweCAwIC01cHggd2hpdGU7XG59XG5cbi5pbnNwaXJhdGlvbiB7XG5wb3NpdGlvbjogYWJzb2x1dGU7XG5ib3R0b206IDEwcHg7XG5yaWdodDogMTBweDtcbmNvbG9yOiB3aGl0ZTtcbmZvbnQtc2l6ZTogMTBweDtcblxuYSB7XG4gY29sb3I6IHdoaXRlO1xufVxufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZUVsZW1lbnQge1xuMCUge3RyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO31cbjEwMCUge3RyYW5zZm9ybTogdHJhbnNsYXRlKC00MDBweCwgMCk7fVxufVxuXG5Aa2V5ZnJhbWVzIG1vb25PcmJpdCB7XG4wJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTI1MHB4LCAwKTsgIHotaW5kZXg6IDEwfVxuMjAlIHt6LWluZGV4Oi0xO31cbjUwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGUoMjUwcHgsIDApfVxuMTAwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTI1MHB4LCAwKX1cbn1cbiIsImgxIHtcbiAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsIFwiVGltZXMgTmV3IFJvbWFuXCIsIHNlcmlmO1xufVxuXG5odG1sLCBib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KCMyOTI5MjksICMwMDAwMDApO1xufVxuXG4uZWFydGgge1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzODBCNTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogMjtcbiAgYm94LXNoYWRvdzogaW5zZXQgLTMwcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMCAwIDEyMHB4IHJnYmEoMjAsIDEwNiwgMjIxLCAwLjEpLCAwIDAgMCAxODBweCByZ2JhKDIwLCAxMDYsIDIyMSwgMC4xKTtcbn1cblxuLyogTGFuZCAqL1xuLmVhcnRoLWxpbmVhciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQ6IHBpbms7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAxMDBweCAxMDBweCwgI2Y2MzRjYiwgI2ZmZik7XG4gIGFuaW1hdGlvbi1uYW1lOiByb2xsO1xuICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xufVxuXG4uZWFydGg6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjODVDNTY3O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiA3NXB4O1xuICBsZWZ0OiAwO1xuICB0b3A6IDUwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBhbmltYXRpb246IHJvdGF0ZUVsZW1lbnQgbGluZWFyIDI1cyBpbmZpbml0ZTtcbiAgYm94LXNoYWRvdzogMHB4IDc1cHggMCAtNXB4ICM4NUM1NjcsIDVweCAzNXB4IDAgLTNweCAjODVDNTY3LCAzNXB4IDEyNXB4IDAgLTlweCAjODVDNTY3LCAxMjBweCAtMTVweCAwIC03cHggIzg1QzU2NywgMTM1cHggLTU1cHggMCAtOXB4ICM4NUM1NjcsIDE1MHB4IDI1cHggMCA3cHggIzg1QzU2NywgMjIwcHggNzBweCAwIC0ycHggIzg1QzU2NywgMjM1cHggLTM1cHggMCAtM3B4ICM4NUM1NjcsIDI4MHB4IDg1cHggMCAzcHggIzg1QzU2NywgMzIwcHggMzBweCAwIDFweCAjODVDNTY3LCA0MDBweCAwIDAgMCAjODVDNTY3LCA0MDBweCA3NXB4IDAgLTVweCAjODVDNTY3LCA0MDVweCAzNXB4IDAgLTNweCAjODVDNTY3LCA0MzVweCAxMjVweCAwIC05cHggIzg1QzU2NywgNTIwcHggLTE1cHggMCAtN3B4ICM4NUM1NjcsIDUzNXB4IC01NXB4IDAgLTlweCAjODVDNTY3LCA1NTBweCAyNXB4IDAgN3B4ICM4NUM1NjcsIDYyMHB4IDcwcHggMCAtMnB4ICM4NUM1NjcsIDYzNXB4IC0zNXB4IDAgLTNweCAjODVDNTY3LCA2ODBweCA4NXB4IDAgM3B4ICM4NUM1NjcsIDcyMHB4IDMwcHggMCAxcHggIzg1QzU2Nztcbn1cblxuLyogQ2xvdWRzICovXG4uZWFydGg6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogNTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIGFuaW1hdGlvbjogcm90YXRlRWxlbWVudCBsaW5lYXIgMjVzIGluZmluaXRlO1xuICBib3gtc2hhZG93OiAxMHB4IDUwcHggMCAzcHggd2hpdGUsIDUwcHggLTE1cHggMCAycHggd2hpdGUsIDcwcHggNzBweCAwIC0xcHggd2hpdGUsIDEwMHB4IDI1cHggMCAxcHggd2hpdGUsIDExMHB4IDEwNXB4IDAgLTRweCB3aGl0ZSwgMTQwcHggNzVweCAwIC0zcHggd2hpdGUsIDI1MHB4IC0yNXB4IDAgLTFweCB3aGl0ZSwgMjEwcHggNTBweCAwIDFweCB3aGl0ZSwgMzQwcHggMTMwcHggMCAxcHggd2hpdGUsIDQwMHB4IDBweCAwIDAgd2hpdGUsIDQxMHB4IDUwcHggMCAzcHggd2hpdGUsIDUwMHB4IDI1cHggMCAxcHggd2hpdGUsIDQ1MHB4IC0xNXB4IDAgMnB4IHdoaXRlLCA0NzBweCA3MHB4IDAgLTFweCB3aGl0ZSwgNTQwcHggNzVweCAwIC0zcHggd2hpdGUsIDUxMHB4IDEwNXB4IDAgLTRweCB3aGl0ZSwgNjUwcHggLTI1cHggMCAtMXB4IHdoaXRlLCA2MTBweCA1MHB4IDAgMXB4IHdoaXRlLCA3NDBweCAxMzBweCAwIDFweCB3aGl0ZTtcbn1cblxuLmVhcnRoLS1zaGFkb3cge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHotaW5kZXg6IDQ7XG4gIGJveC1zaGFkb3c6IGluc2V0IC0zMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4ubW9vbiB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTVBNUE1O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBvdmVyZmxvdzogYXV0bztcbiAgei1pbmRleDogMTA7XG4gIGJveC1zaGFkb3c6IGluc2V0IC0zcHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGFuaW1hdGlvbjogbW9vbk9yYml0IGVhc2UtaW4tb3V0IDNzIGluZmluaXRlO1xufVxuXG4ubW9vbjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogNXB4O1xuICB3aWR0aDogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IGdyYXk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4cHg7XG4gIGxlZnQ6IDEwcHg7XG4gIGJveC1zaGFkb3c6IC00cHggM3B4IDAgLTFweCBncmF5LCA0cHggMnB4IDAgLTFweCBncmF5LCAtMnB4IC02cHggMCAtMXB4IGdyYXk7XG59XG5cbi5zdGFycyB7XG4gIGhlaWdodDogMTBweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDgwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHotaW5kZXg6IDE7XG4gIGJveC1zaGFkb3c6IDUxMHB4IC00NTBweCAwIDFweCB3aGl0ZSwgNDkwcHggLTEyNXB4IDAgLTJweCB3aGl0ZSwgMTUwcHggLTE1MHB4IDAgLTFweCB3aGl0ZSwgMTMwcHggMjcwcHggMCAtMXB4IHdoaXRlLCA0ODBweCA0NzVweCAwIC0zcHggd2hpdGUsIC02MTBweCA2MDVweCAwIC00cHggd2hpdGUsIDU3MHB4IDc1MHB4IDAgLTNweCB3aGl0ZSwgLTU1MHB4IDQyNXB4IDAgMXB4IHdoaXRlLCA2NTBweCAtMTA1cHggMCAtMnB4IHdoaXRlLCAzMTBweCA2MHB4IDAgLTFweCB3aGl0ZSwgLTM0MHB4IDE3NXB4IDAgLTNweCB3aGl0ZSwgLTYxMHB4IDEyMDVweCAwIC00cHggd2hpdGUsIDUwMHB4IDQ1MHB4IDAgLTNweCB3aGl0ZSwgLTUwMHB4IDEyNXB4IDAgMXB4IHdoaXRlLCAtMTUwcHggLTYxNXB4IDAgLTJweCB3aGl0ZSwgLTExMHB4IC0zNzBweCAwIC0xcHggd2hpdGUsIC00NDBweCAtMTc1cHggMCAtM3B4IHdoaXRlLCAtNjEwcHggLTIwNXB4IDAgLTRweCB3aGl0ZSwgNDEwcHggLTQ1MHB4IDAgLTNweCB3aGl0ZSwgMzkwcHggLTEyNXB4IDAgLTJweCB3aGl0ZSwgNTBweCAtMjUwcHggMCAtMXB4IHdoaXRlLCAzMHB4IC0xNzBweCAwIC0xcHggd2hpdGUsIDM4MHB4IDM3NXB4IDAgLTVweCB3aGl0ZSwgLTcxMHB4IDcwNXB4IDAgLTZweCB3aGl0ZSwgNDcwcHggLTY1MHB4IDAgLTNweCB3aGl0ZSwgLTQ1MHB4IDQyNXB4IDAgMXB4IHdoaXRlLCA1NTBweCAtMjA1cHggMCAtNXB4IHdoaXRlLCAyMTBweCA1MHB4IDAgLTFweCB3aGl0ZSwgLTI0MHB4IDI3NXB4IDAgLTVweCB3aGl0ZSwgLTUxMHB4IDEyMHB4IDAgLTRweCB3aGl0ZSwgNjAwcHggNTUwcHggMCAtM3B4IHdoaXRlLCAtNDAwcHggMjI1cHggMCAxcHggd2hpdGUsIC0yNTBweCAtNTE1cHggMCAtMnB4IHdoaXRlLCAtMzEwcHggLTE3MHB4IDAgLTRweCB3aGl0ZSwgLTM0MHB4IC0yNzVweCAwIC00cHggd2hpdGUsIC01MTBweCAtMzA1cHggMCAtNXB4IHdoaXRlO1xufVxuXG4uaW5zcGlyYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLmluc3BpcmF0aW9uIGEge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlRWxlbWVudCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNDAwcHgsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIG1vb25PcmJpdCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjUwcHgsIDApO1xuICAgIHotaW5kZXg6IDEwO1xuICB9XG4gIDIwJSB7XG4gICAgei1pbmRleDogLTE7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNTBweCwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTI1MHB4LCAwKTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");



let HomeComponent = class HomeComponent {
    constructor(ngxService) {
        this.ngxService = ngxService;
    }
    ngOnInit() {
        this.ngxService.start(); // start foreground loading with 'default' id
        // Stop the foreground loading after 5s
        setTimeout(() => {
            this.ngxService.stop(); // stop foreground loading with 'default' id
        }, 500);
    }
};
HomeComponent.ctorParameters = () => [
    { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__["NgxUiLoaderService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__["NgxUiLoaderService"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/lms/lms.component.scss":
/*!****************************************!*\
  !*** ./src/app/lms/lms.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xtcy9sbXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/lms/lms.component.ts":
/*!**************************************!*\
  !*** ./src/app/lms/lms.component.ts ***!
  \**************************************/
/*! exports provided: LmsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LmsComponent", function() { return LmsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LmsComponent = class LmsComponent {
    constructor() { }
    ngOnInit() {
    }
};
LmsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lms',
        template: __webpack_require__(/*! raw-loader!./lms.component.html */ "./node_modules/raw-loader/index.js!./src/app/lms/lms.component.html"),
        styles: [__webpack_require__(/*! ./lms.component.scss */ "./src/app/lms/lms.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LmsComponent);



/***/ }),

/***/ "./src/app/login/login-fund-shg/login-fund-shg.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/login/login-fund-shg/login-fund-shg.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLWZ1bmQtc2hnL2xvZ2luLWZ1bmQtc2hnLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/login/login-fund-shg/login-fund-shg.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/login/login-fund-shg/login-fund-shg.component.ts ***!
  \******************************************************************/
/*! exports provided: LoginFundShgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFundShgComponent", function() { return LoginFundShgComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoginFundShgComponent = class LoginFundShgComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoginFundShgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-fund-shg',
        template: __webpack_require__(/*! raw-loader!./login-fund-shg.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login-fund-shg/login-fund-shg.component.html"),
        styles: [__webpack_require__(/*! ./login-fund-shg.component.scss */ "./src/app/login/login-fund-shg/login-fund-shg.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LoginFundShgComponent);



/***/ }),

/***/ "./src/app/login/login-fund/login-fund.component.scss":
/*!************************************************************!*\
  !*** ./src/app/login/login-fund/login-fund.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLWZ1bmQvbG9naW4tZnVuZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/login/login-fund/login-fund.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/login/login-fund/login-fund.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginFundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFundComponent", function() { return LoginFundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoginFundComponent = class LoginFundComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoginFundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-fund',
        template: __webpack_require__(/*! raw-loader!./login-fund.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login-fund/login-fund.component.html"),
        styles: [__webpack_require__(/*! ./login-fund.component.scss */ "./src/app/login/login-fund/login-fund.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LoginFundComponent);



/***/ }),

/***/ "./src/app/login/login-join-shg/login-join-shg.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/login/login-join-shg/login-join-shg.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background: #F1F3FA;\n}\n\n/* Profile container */\n\n.profile {\n  margin: 20px 0;\n}\n\n/* Profile sidebar */\n\n.profile-sidebar {\n  padding: 20px 0 10px 0;\n  background: #fff;\n}\n\n.profile-userpic img {\n  float: none;\n  margin: 0 auto;\n  width: 50%;\n  height: 50%;\n  border-radius: 50% !important;\n}\n\n.profile-usertitle {\n  text-align: center;\n  margin-top: 20px;\n}\n\n.profile-usertitle-name {\n  color: #5a7391;\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 7px;\n}\n\n.profile-usertitle-job {\n  text-transform: uppercase;\n  color: #5b9bd1;\n  font-size: 12px;\n  font-weight: 600;\n  margin-bottom: 15px;\n}\n\n.profile-userbuttons {\n  text-align: center;\n  margin-top: 10px;\n}\n\n.profile-userbuttons .btn {\n  text-transform: uppercase;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 6px 15px;\n  margin-right: 5px;\n}\n\n.profile-userbuttons .btn:last-child {\n  margin-right: 0px;\n}\n\n.profile-usermenu {\n  margin-top: 30px;\n}\n\n.profile-usermenu ul li {\n  border-bottom: 1px solid #f0f4f7;\n}\n\n.profile-usermenu ul li:last-child {\n  border-bottom: none;\n}\n\n.profile-usermenu ul li a {\n  color: #93a3b5;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.profile-usermenu ul li a i {\n  margin-right: 8px;\n  font-size: 14px;\n}\n\n.profile-usermenu ul li a:hover {\n  background-color: #fafcfd;\n  color: #5b9bd1;\n}\n\n.profile-usermenu ul li.active {\n  border-bottom: none;\n}\n\n.profile-usermenu ul li.active a {\n  color: #5b9bd1;\n  background-color: #f6f9fb;\n  border-left: 2px solid #5b9bd1;\n  margin-left: -2px;\n}\n\n/* Profile Content */\n\n.profile-content {\n  padding: 20px;\n  background: #fff;\n  min-height: 460px;\n}\n\na, button, code, div, img, input, label, li, p, pre, select, span, svg, table, td, textarea, th, ul {\n  border-radius: 0 !important;\n}\n\n.dashboard-stat, .portlet {\n  -webkit-border-radius: 4px;\n  -moz-border-radius: 4px;\n  -ms-border-radius: 4px;\n  -o-border-radius: 4px;\n}\n\n.portlet {\n  margin-top: 0;\n  margin-bottom: 25px;\n  padding: 0;\n  border-radius: 4px;\n}\n\n.portlet.bordered {\n  border-left: 2px solid #e6e9ec !important;\n}\n\n.portlet.light {\n  padding: 12px 20px 15px;\n  background-color: #fff;\n}\n\n.portlet.light.bordered {\n  border: 1px solid #e7ecf1 !important;\n}\n\n.list-separated {\n  margin-top: 10px;\n  margin-bottom: 15px;\n}\n\n.profile-stat {\n  padding-bottom: 20px;\n  border-bottom: 1px solid #f0f4f7;\n}\n\n.profile-stat-title {\n  color: #7f90a4;\n  font-size: 25px;\n  text-align: center;\n}\n\n.uppercase {\n  text-transform: uppercase !important;\n}\n\n.profile-stat-text {\n  color: #5b9bd1;\n  font-size: 10px;\n  font-weight: 600;\n  text-align: center;\n}\n\n.profile-desc-title {\n  color: #7f90a4;\n  font-size: 17px;\n  font-weight: 600;\n}\n\n.profile-desc-text {\n  color: #7e8c9e;\n  font-size: 14px;\n}\n\n.margin-top-20 {\n  margin-top: 20px !important;\n}\n\n[class*=\" fa-\"]:not(.fa-stack), [class*=\" glyphicon-\"], [class*=\" icon-\"], [class^=fa-]:not(.fa-stack), [class^=glyphicon-], [class^=icon-] {\n  display: inline-block;\n  line-height: 14px;\n  -webkit-font-smoothing: antialiased;\n}\n\n.profile-desc-link i {\n  width: 22px;\n  font-size: 19px;\n  color: #abb6c4;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NodWJoYW0vUHJvamVjdHMvaXRzLWEtdHJhcC9wdWJsaWMvc3JjL2FwcC9sb2dpbi9sb2dpbi1qb2luLXNoZy9sb2dpbi1qb2luLXNoZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4tam9pbi1zaGcvbG9naW4tam9pbi1zaGcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxtQkFBQTtBQ0FKOztBREdFLHNCQUFBOztBQUNGO0VBQ0ksY0FBQTtBQ0FKOztBREdFLG9CQUFBOztBQUNBO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREdFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUdBLDZCQUFBO0FDQUo7O0FER0U7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDQUo7O0FER0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQUo7O0FER0U7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDQUo7O0FER0U7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURHRTtFQUNFLGlCQUFBO0FDQUo7O0FER0U7RUFDRSxnQkFBQTtBQ0FKOztBREdFO0VBQ0UsZ0NBQUE7QUNBSjs7QURHRTtFQUNFLG1CQUFBO0FDQUo7O0FER0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQUo7O0FER0U7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNBSjs7QURHRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREdFO0VBQ0UsbUJBQUE7QUNBSjs7QURHRTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURHRSxvQkFBQTs7QUFDQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQUo7O0FEeUJFO0VBR0ksMkJBQUE7QUN0Qk47O0FEd0JFO0VBQ0ksMEJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUNyQk47O0FEdUJFO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDcEJOOztBRHNCRTtFQUNJLHlDQUFBO0FDbkJOOztBRHFCRTtFQUNJLHVCQUFBO0VBQ0Esc0JBQUE7QUNsQk47O0FEb0JFO0VBQ0ksb0NBQUE7QUNqQk47O0FEbUJFO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQ2hCTjs7QURrQkU7RUFDSSxvQkFBQTtFQUNBLGdDQUFBO0FDZk47O0FEaUJFO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ2ROOztBRGdCRTtFQUNJLG9DQUFBO0FDYk47O0FEZ0JFO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDYk47O0FEZUU7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDWk47O0FEY0U7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ1hOOztBRGFFO0VBQ0ksMkJBQUE7QUNWTjs7QURZRTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQ0FBQTtBQ1ROOztBRFdFO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNSTiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLWpvaW4tc2hnL2xvZ2luLWpvaW4tc2hnLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiAjRjFGM0ZBO1xuICB9XG4gIFxuICAvKiBQcm9maWxlIGNvbnRhaW5lciAqL1xuLnByb2ZpbGUge1xuICAgIG1hcmdpbjogMjBweCAwO1xuICB9XG4gIFxuICAvKiBQcm9maWxlIHNpZGViYXIgKi9cbiAgLnByb2ZpbGUtc2lkZWJhciB7XG4gICAgcGFkZGluZzogMjBweCAwIDEwcHggMDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB9XG4gIFxuICAucHJvZmlsZS11c2VycGljIGltZyB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5wcm9maWxlLXVzZXJ0aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbiAgXG4gIC5wcm9maWxlLXVzZXJ0aXRsZS1uYW1lIHtcbiAgICBjb2xvcjogIzVhNzM5MTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gIH1cbiAgXG4gIC5wcm9maWxlLXVzZXJ0aXRsZS1qb2Ige1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICM1YjliZDE7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuICBcbiAgLnByb2ZpbGUtdXNlcmJ1dHRvbnMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG4gIFxuICAucHJvZmlsZS11c2VyYnV0dG9ucyAuYnRuIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmc6IDZweCAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG4gIFxuICAucHJvZmlsZS11c2VyYnV0dG9ucyAuYnRuOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICB9XG4gICAgICBcbiAgLnByb2ZpbGUtdXNlcm1lbnUge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gIH1cbiAgXG4gIC5wcm9maWxlLXVzZXJtZW51IHVsIGxpIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjRmNztcbiAgfVxuICBcbiAgLnByb2ZpbGUtdXNlcm1lbnUgdWwgbGk6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgfVxuICBcbiAgLnByb2ZpbGUtdXNlcm1lbnUgdWwgbGkgYSB7XG4gICAgY29sb3I6ICM5M2EzYjU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgXG4gIC5wcm9maWxlLXVzZXJtZW51IHVsIGxpIGEgaSB7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIFxuICAucHJvZmlsZS11c2VybWVudSB1bCBsaSBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmY2ZkO1xuICAgIGNvbG9yOiAjNWI5YmQxO1xuICB9XG4gIFxuICAucHJvZmlsZS11c2VybWVudSB1bCBsaS5hY3RpdmUge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIH1cbiAgXG4gIC5wcm9maWxlLXVzZXJtZW51IHVsIGxpLmFjdGl2ZSBhIHtcbiAgICBjb2xvcjogIzViOWJkMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmOWZiO1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzViOWJkMTtcbiAgICBtYXJnaW4tbGVmdDogLTJweDtcbiAgfVxuICBcbiAgLyogUHJvZmlsZSBDb250ZW50ICovXG4gIC5wcm9maWxlLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBtaW4taGVpZ2h0OiA0NjBweDtcbiAgfVxuICBcbiAgXG4gIFxuICBcbiAgXG4gIFxuICBcbiAgXG4gIFxuICBcbiAgXG4gIFxuICBcbiAgXG4gIFxuICBcbiAgXG4gIFxuICBcbiAgXG4gIFxuICBcbiAgXG4gIGEsIGJ1dHRvbiwgY29kZSwgZGl2LCBpbWcsIGlucHV0LCBsYWJlbCwgbGksIHAsIHByZSwgc2VsZWN0LCBzcGFuLCBzdmcsIHRhYmxlLCB0ZCwgdGV4dGFyZWEsIHRoLCB1bCB7XG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAhaW1wb3J0YW50O1xuICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAwIWltcG9ydGFudDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAhaW1wb3J0YW50O1xuICB9XG4gIC5kYXNoYm9hcmQtc3RhdCwgLnBvcnRsZXQge1xuICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIC1tcy1ib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAtby1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cbiAgLnBvcnRsZXQge1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG4gIC5wb3J0bGV0LmJvcmRlcmVkIHtcbiAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2U2ZTllYyFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBvcnRsZXQubGlnaHQge1xuICAgICAgcGFkZGluZzogMTJweCAyMHB4IDE1cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB9XG4gIC5wb3J0bGV0LmxpZ2h0LmJvcmRlcmVkIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlN2VjZjEhaW1wb3J0YW50O1xuICB9XG4gIC5saXN0LXNlcGFyYXRlZCB7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuICAucHJvZmlsZS1zdGF0IHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGY0Zjc7XG4gIH1cbiAgLnByb2ZpbGUtc3RhdC10aXRsZSB7XG4gICAgICBjb2xvcjogIzdmOTBhNDtcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAudXBwZXJjYXNlIHtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UhaW1wb3J0YW50O1xuICB9XG4gIFxuICAucHJvZmlsZS1zdGF0LXRleHQge1xuICAgICAgY29sb3I6ICM1YjliZDE7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5wcm9maWxlLWRlc2MtdGl0bGUge1xuICAgICAgY29sb3I6ICM3ZjkwYTQ7XG4gICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG4gIC5wcm9maWxlLWRlc2MtdGV4dCB7XG4gICAgICBjb2xvcjogIzdlOGM5ZTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAubWFyZ2luLXRvcC0yMCB7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4IWltcG9ydGFudDtcbiAgfVxuICBbY2xhc3MqPVwiIGZhLVwiXTpub3QoLmZhLXN0YWNrKSwgW2NsYXNzKj1cIiBnbHlwaGljb24tXCJdLCBbY2xhc3MqPVwiIGljb24tXCJdLCBbY2xhc3NePWZhLV06bm90KC5mYS1zdGFjayksIFtjbGFzc149Z2x5cGhpY29uLV0sIFtjbGFzc149aWNvbi1dIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIH1cbiAgLnByb2ZpbGUtZGVzYy1saW5rIGkge1xuICAgICAgd2lkdGg6IDIycHg7XG4gICAgICBmb250LXNpemU6IDE5cHg7XG4gICAgICBjb2xvcjogI2FiYjZjNDtcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9IiwiYm9keSB7XG4gIGJhY2tncm91bmQ6ICNGMUYzRkE7XG59XG5cbi8qIFByb2ZpbGUgY29udGFpbmVyICovXG4ucHJvZmlsZSB7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuXG4vKiBQcm9maWxlIHNpZGViYXIgKi9cbi5wcm9maWxlLXNpZGViYXIge1xuICBwYWRkaW5nOiAyMHB4IDAgMTBweCAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4ucHJvZmlsZS11c2VycGljIGltZyB7XG4gIGZsb2F0OiBub25lO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xufVxuXG4ucHJvZmlsZS11c2VydGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5wcm9maWxlLXVzZXJ0aXRsZS1uYW1lIHtcbiAgY29sb3I6ICM1YTczOTE7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xufVxuXG4ucHJvZmlsZS11c2VydGl0bGUtam9iIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICM1YjliZDE7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLnByb2ZpbGUtdXNlcmJ1dHRvbnMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5wcm9maWxlLXVzZXJidXR0b25zIC5idG4ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDZweCAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnByb2ZpbGUtdXNlcmJ1dHRvbnMgLmJ0bjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG5cbi5wcm9maWxlLXVzZXJtZW51IHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLnByb2ZpbGUtdXNlcm1lbnUgdWwgbGkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjRmNztcbn1cblxuLnByb2ZpbGUtdXNlcm1lbnUgdWwgbGk6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5wcm9maWxlLXVzZXJtZW51IHVsIGxpIGEge1xuICBjb2xvcjogIzkzYTNiNTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ucHJvZmlsZS11c2VybWVudSB1bCBsaSBhIGkge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ucHJvZmlsZS11c2VybWVudSB1bCBsaSBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmNmZDtcbiAgY29sb3I6ICM1YjliZDE7XG59XG5cbi5wcm9maWxlLXVzZXJtZW51IHVsIGxpLmFjdGl2ZSB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5wcm9maWxlLXVzZXJtZW51IHVsIGxpLmFjdGl2ZSBhIHtcbiAgY29sb3I6ICM1YjliZDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY5ZmI7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzViOWJkMTtcbiAgbWFyZ2luLWxlZnQ6IC0ycHg7XG59XG5cbi8qIFByb2ZpbGUgQ29udGVudCAqL1xuLnByb2ZpbGUtY29udGVudCB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1pbi1oZWlnaHQ6IDQ2MHB4O1xufVxuXG5hLCBidXR0b24sIGNvZGUsIGRpdiwgaW1nLCBpbnB1dCwgbGFiZWwsIGxpLCBwLCBwcmUsIHNlbGVjdCwgc3Bhbiwgc3ZnLCB0YWJsZSwgdGQsIHRleHRhcmVhLCB0aCwgdWwge1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbn1cblxuLmRhc2hib2FyZC1zdGF0LCAucG9ydGxldCB7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDRweDtcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDRweDtcbiAgLW8tYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4ucG9ydGxldCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLnBvcnRsZXQuYm9yZGVyZWQge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNlNmU5ZWMgIWltcG9ydGFudDtcbn1cblxuLnBvcnRsZXQubGlnaHQge1xuICBwYWRkaW5nOiAxMnB4IDIwcHggMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLnBvcnRsZXQubGlnaHQuYm9yZGVyZWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTdlY2YxICFpbXBvcnRhbnQ7XG59XG5cbi5saXN0LXNlcGFyYXRlZCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5wcm9maWxlLXN0YXQge1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGY0Zjc7XG59XG5cbi5wcm9maWxlLXN0YXQtdGl0bGUge1xuICBjb2xvcjogIzdmOTBhNDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi51cHBlcmNhc2Uge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XG59XG5cbi5wcm9maWxlLXN0YXQtdGV4dCB7XG4gIGNvbG9yOiAjNWI5YmQxO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnByb2ZpbGUtZGVzYy10aXRsZSB7XG4gIGNvbG9yOiAjN2Y5MGE0O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5wcm9maWxlLWRlc2MtdGV4dCB7XG4gIGNvbG9yOiAjN2U4YzllO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5tYXJnaW4tdG9wLTIwIHtcbiAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xufVxuXG5bY2xhc3MqPVwiIGZhLVwiXTpub3QoLmZhLXN0YWNrKSwgW2NsYXNzKj1cIiBnbHlwaGljb24tXCJdLCBbY2xhc3MqPVwiIGljb24tXCJdLCBbY2xhc3NePWZhLV06bm90KC5mYS1zdGFjayksIFtjbGFzc149Z2x5cGhpY29uLV0sIFtjbGFzc149aWNvbi1dIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbi5wcm9maWxlLWRlc2MtbGluayBpIHtcbiAgd2lkdGg6IDIycHg7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgY29sb3I6ICNhYmI2YzQ7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login-join-shg/login-join-shg.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/login/login-join-shg/login-join-shg.component.ts ***!
  \******************************************************************/
/*! exports provided: LoginJoinShgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginJoinShgComponent", function() { return LoginJoinShgComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_shared_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/manager.service */ "./src/shared/manager.service.ts");
/* harmony import */ var src_shared_mentor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/mentor.service */ "./src/shared/mentor.service.ts");
/* harmony import */ var src_shared_shg_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/shg.service */ "./src/shared/shg.service.ts");
/* harmony import */ var src_shared_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/user.service */ "./src/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_shared_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/shared/auth.service */ "./src/shared/auth.service.ts");









let LoginJoinShgComponent = class LoginJoinShgComponent {
    constructor(managerService, shgService, mentorService, userService, authService, _location, router) {
        this.managerService = managerService;
        this.shgService = shgService;
        this.mentorService = mentorService;
        this.userService = userService;
        this.authService = authService;
        this._location = _location;
        this.router = router;
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('User'));
        this.shgService.getAllSHG()
            .subscribe((res) => {
            console.log(res['shg']);
            this.shgs = res['shg'];
        });
    }
    joinTheSHG(shg_id) {
        this.userService.joinSHG(shg_id, this.user._id)
            .subscribe((res) => {
            console.log("One" + res);
            console.log("Here" + shg_id);
            this.shgService.getSHG(shg_id)
                .subscribe((res2) => {
                console.log("Two", res2);
                const shgData = res2['shg'];
                console.log("ID" + shgData['mentor']);
                this.mentorService.addMentee(shgData['mentor'], this.user._id)
                    .subscribe((res3) => {
                    console.log("Three", res3);
                    this.shgService.addMentee(shg_id, this.user._id)
                        .subscribe((res4) => {
                        console.log("Four", res4);
                        this.authService.partOfSHG.next(true);
                        localStorage.setItem('User', JSON.stringify(res['user']));
                        this.router.navigate(['user', 'my-shg']);
                    });
                });
            });
        });
    }
};
LoginJoinShgComponent.ctorParameters = () => [
    { type: src_shared_manager_service__WEBPACK_IMPORTED_MODULE_2__["ManagerService"] },
    { type: src_shared_shg_service__WEBPACK_IMPORTED_MODULE_4__["ShgService"] },
    { type: src_shared_mentor_service__WEBPACK_IMPORTED_MODULE_3__["MentorService"] },
    { type: src_shared_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: src_shared_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
LoginJoinShgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-join-shg',
        template: __webpack_require__(/*! raw-loader!./login-join-shg.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login-join-shg/login-join-shg.component.html"),
        styles: [__webpack_require__(/*! ./login-join-shg.component.scss */ "./src/app/login/login-join-shg/login-join-shg.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_shared_manager_service__WEBPACK_IMPORTED_MODULE_2__["ManagerService"],
        src_shared_shg_service__WEBPACK_IMPORTED_MODULE_4__["ShgService"],
        src_shared_mentor_service__WEBPACK_IMPORTED_MODULE_3__["MentorService"],
        src_shared_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
        src_shared_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], LoginJoinShgComponent);



/***/ }),

/***/ "./src/app/login/login-my-shg/login-my-shg.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/login/login-my-shg/login-my-shg.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:700,600,300\");\n.frame {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 400px;\n  height: 400px;\n  margin-top: -200px;\n  margin-left: -200px;\n  border-radius: 2px;\n  box-shadow: 4px 8px 16px 0 rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  background: linear-gradient(to bottom left, #00a6ff, #63c33b);\n  background-size: 125% 125%;\n  color: #2d6120;\n  font-family: \"Open Sans\", Helvetica, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.center {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.card {\n  width: 320px;\n  height: 300px;\n  background: white;\n  box-shadow: 4px 8px 16px 0 #1b3b14;\n}\n.card .left {\n  position: absolute;\n  left: 0;\n  width: 190px;\n  height: 300px;\n  overflow: hidden;\n}\n.card .left .avatar {\n  position: absolute;\n  left: 60px;\n  top: 32px;\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  cursor: pointer;\n  background: #bee6b4;\n}\n.card .left .avatar .circle {\n  box-sizing: border-box;\n  position: absolute;\n  border-radius: 50%;\n  transition: all 1.5s ease-in-out;\n  border: 1px solid;\n}\n.card .left .avatar .circle:first-child {\n  left: -3px;\n  top: -3px;\n  width: 76px;\n  height: 76px;\n  border-color: #2d6120 #2d6120 #2d6120 transparent;\n}\n.card .left .avatar .circle:nth-child(2) {\n  left: -6px;\n  top: -6px;\n  width: 82px;\n  height: 82px;\n  border-color: #2d6120 transparent #2d6120 #2d6120;\n}\n.card .left .avatar:hover .circle:first-child {\n  -webkit-transform: rotate(360deg);\n          transform: rotate(360deg);\n}\n.card .left .avatar:hover .circle:nth-child(2) {\n  -webkit-transform: rotate(-360deg);\n          transform: rotate(-360deg);\n}\n.card .left .avatar img {\n  width: inherit;\n  height: inherit;\n  display: block;\n  border-radius: inherit;\n}\n.card .left .info {\n  position: absolute;\n  text-align: center;\n  top: 122px;\n  width: 100%;\n}\n.card .left .info span {\n  display: block;\n}\n.card .left .info span.small {\n  top: 22px;\n}\n.card .left .buttons {\n  position: absolute;\n  text-align: center;\n  bottom: 32px;\n  width: 100%;\n  height: 80px;\n}\n.card .left .buttons button {\n  padding-top: 2px;\n  text-transform: capitalize;\n  text-align: center;\n  font-size: 12px;\n  font-weight: 600;\n  color: #2d6120;\n  width: 120px;\n  height: 26px;\n  margin: 8px 0;\n  background: white;\n  border-radius: 15px;\n  border: none;\n  box-shadow: 0 0 0 1px #2d6120;\n  cursor: pointer;\n}\n.card .left .buttons button:hover {\n  background: #2d6120;\n  color: white;\n}\n.card .right {\n  position: absolute;\n  right: 0;\n  width: 130px;\n  height: 300px;\n}\n.card .right .stats {\n  position: relative;\n  height: 100px;\n  background: #00a6ff;\n  box-shadow: 0 -1px white;\n  cursor: pointer;\n}\n.card .right .stats:first-child {\n  box-shadow: none;\n}\n.card .right .stats:hover {\n  background: #bee6b4;\n}\n.card .right .stats span.big {\n  top: 30px;\n}\n.card .right .stats span.small {\n  top: 50px;\n}\nspan {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  text-transform: capitalize;\n  text-align: center;\n}\nspan.big {\n  font-size: 18px;\n  font-weight: 600;\n}\nspan.small {\n  font-size: 12px;\n  font-weight: 300;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NodWJoYW0vUHJvamVjdHMvaXRzLWEtdHJhcC9wdWJsaWMvc3JjL2FwcC9sb2dpbi9sb2dpbi1teS1zaGcvbG9naW4tbXktc2hnLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi1teS1zaGcvbG9naW4tbXktc2hnLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVRLDRFQUFBO0FBS1I7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDRCw2Q0FBQTtFQUNBLGdCQUFBO0VBQ0MsNkRBQUE7RUFDRCwwQkFBQTtFQUNBLGNBaEJhO0VBaUJiLCtDQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBQ0xEO0FEUUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtBQ0xGO0FET0E7RUFDQyxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7QUNKRDtBREtDO0VBQ0Msa0JBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0hGO0FES0U7RUFDQyxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FMVTtFQU1WLFlBTlU7RUFPVixrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFqRE07QUM4Q1Q7QURJRztFQUNDLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7QUNGSjtBRElHO0VBQ0MsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlEQUFBO0FDRko7QURJRztFQUNDLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpREFBQTtBQ0ZKO0FES0k7RUFDQyxpQ0FBQTtVQUFBLHlCQUFBO0FDSEw7QURLSTtFQUNDLGtDQUFBO1VBQUEsMEJBQUE7QUNITDtBRE1HO0VBQ0MsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUNKSjtBRE9FO0VBQ0Msa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDTEg7QURNRztFQUNDLGNBQUE7QUNKSjtBREtJO0VBQ0MsU0FBQTtBQ0hMO0FEUUU7RUFDQyxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDTkg7QURPRztFQUNDLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBOUdVO0VBK0dWLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FDTEo7QURNSTtFQUNDLG1CQXhIUztFQXlIVCxZQUFBO0FDSkw7QURTQztFQUNDLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDUEY7QURRRTtFQUNDLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0FDTkg7QURPRztFQUNDLGdCQUFBO0FDTEo7QURPRztFQUNDLG1CQTlJSztBQ3lJVDtBRFFJO0VBQ0MsU0FBQTtBQ05MO0FEUUk7RUFDQyxTQUFBO0FDTkw7QURhQTtFQUNDLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FDVkQ7QURXQztFQUNDLGVBQUE7RUFDQSxnQkFBQTtBQ1RGO0FEV0M7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7QUNURiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLW15LXNoZy9sb2dpbi1teS1zaGcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBkZWxldGUgdGhlIGZvbGxvd2luZyBsaW5lIGlmIG5vIHRleHQgaXMgdXNlZFxuLy8gZWRpdCB0aGUgbGluZSBpZiB5b3Ugd2FubmEgdXNlIG90aGVyIGZvbnRzXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2Fuczo3MDAsNjAwLDMwMCcpO1xuJGNvbG9yIDogcmdiKDE5MCwyMzAsMTgwKTtcbiRjb2xvci1kYXJrIDogZGFya2VuKCRjb2xvciwgNTUlKTtcbiRjb2xvci1saWdodCA6IGxpZ2h0ZW4oJGNvbG9yLCA1JSk7XG4vLyB1c2Ugb25seSB0aGUgYXZhaWxhYmxlIHNwYWNlIGluc2lkZSB0aGUgNDAweDQwMCBmcmFtZVxuLmZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogNDAwcHg7XG4gIG1hcmdpbi10b3A6IC0yMDBweDtcbiAgbWFyZ2luLWxlZnQ6IC0yMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuXHRib3gtc2hhZG93OiA0cHggOHB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMSk7XG5cdG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gbGVmdCwgIzAwYTZmZiwgIzYzYzMzYik7XG5cdGJhY2tncm91bmQtc2l6ZSA6IDEyNSUgMTI1JTtcblx0Y29sb3IgOiAkY29sb3ItZGFyaztcblx0Zm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG5cdC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuXHQtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG4uY2VudGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xufVxuLmNhcmR7XG5cdHdpZHRoIDogMzIwcHg7XG5cdGhlaWdodDogMzAwcHg7XG5cdGJhY2tncm91bmQgOiB3aGl0ZTtcblx0Ym94LXNoYWRvdzogNHB4IDhweCAxNnB4IDAgZGFya2VuKCRjb2xvci1kYXJrLCAxMCUpO1xuXHQubGVmdHtcblx0XHRwb3NpdGlvbiA6IGFic29sdXRlO1xuXHRcdGxlZnQgOiAwO1xuXHRcdHdpZHRoIDogMTkwcHg7XG5cdFx0aGVpZ2h0OiAzMDBweDtcblx0XHRvdmVyZmxvdyA6IGhpZGRlbjtcblx0XHQkaW1nLXNpemU6IDcwcHg7XG5cdFx0LmF2YXRhcntcblx0XHRcdHBvc2l0aW9uIDogYWJzb2x1dGU7XG5cdFx0XHRsZWZ0IDogKDE5MCAtICRpbWctc2l6ZSkvMjtcblx0XHRcdHRvcCA6IDMycHg7XG5cdFx0XHR3aWR0aCA6ICRpbWctc2l6ZTtcblx0XHRcdGhlaWdodDogJGltZy1zaXplO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0Y3Vyc29yIDogcG9pbnRlcjtcblx0XHRcdGJhY2tncm91bmQgOiAkY29sb3I7XG5cdFx0XHQuY2lyY2xle1xuXHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRwb3NpdGlvbiA6IGFic29sdXRlO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRcdHRyYW5zaXRpb246IGFsbCAxLjVzIGVhc2UtaW4tb3V0O1xuXHRcdFx0XHRib3JkZXIgOiAxcHggc29saWQ7XG5cdFx0XHR9XG5cdFx0XHQuY2lyY2xlOmZpcnN0LWNoaWxke1xuXHRcdFx0XHRsZWZ0IDogLTNweDtcblx0XHRcdFx0dG9wIDogLTNweDtcblx0XHRcdFx0d2lkdGggOiAkaW1nLXNpemUgKyA2cHg7XG5cdFx0XHRcdGhlaWdodDogJGltZy1zaXplICsgNnB4O1xuXHRcdFx0XHRib3JkZXItY29sb3IgOiAkY29sb3ItZGFyayAkY29sb3ItZGFyayAkY29sb3ItZGFyayB0cmFuc3BhcmVudDtcblx0XHRcdH1cblx0XHRcdC5jaXJjbGU6bnRoLWNoaWxkKDIpe1xuXHRcdFx0XHRsZWZ0IDogLTZweDtcblx0XHRcdFx0dG9wIDogLTZweDtcblx0XHRcdFx0d2lkdGggOiAkaW1nLXNpemUgKyAxMnB4O1xuXHRcdFx0XHRoZWlnaHQ6ICRpbWctc2l6ZSArIDEycHg7XG5cdFx0XHRcdGJvcmRlci1jb2xvciA6ICRjb2xvci1kYXJrIHRyYW5zcGFyZW50ICRjb2xvci1kYXJrICRjb2xvci1kYXJrO1xuXHRcdFx0fVxuXHRcdFx0Jjpob3Zlcntcblx0XHRcdFx0LmNpcmNsZTpmaXJzdC1jaGlsZHtcblx0XHRcdFx0XHR0cmFuc2Zvcm0gOiByb3RhdGUoMzYwZGVnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQuY2lyY2xlOm50aC1jaGlsZCgyKXtcblx0XHRcdFx0XHR0cmFuc2Zvcm0gOiByb3RhdGUoLTM2MGRlZyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGltZ3tcblx0XHRcdFx0d2lkdGggOiBpbmhlcml0O1xuXHRcdFx0XHRoZWlnaHQ6IGluaGVyaXQ7XG5cdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuXHRcdFx0fVxuXHRcdH1cblx0XHQuaW5mb3tcblx0XHRcdHBvc2l0aW9uIDogYWJzb2x1dGU7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHR0b3AgOiAkaW1nLXNpemUgKyA1Mjtcblx0XHRcdHdpZHRoIDogMTAwJTtcblx0XHRcdHNwYW57XG5cdFx0XHRcdGRpc3BsYXkgOiBibG9jaztcblx0XHRcdFx0Ji5zbWFsbHtcblx0XHRcdFx0XHR0b3A6IDIycHg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0LmJ1dHRvbnN7XG5cdFx0XHRwb3NpdGlvbiA6IGFic29sdXRlO1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0Ym90dG9tIDogMzJweDtcblx0XHRcdHdpZHRoIDogMTAwJTtcblx0XHRcdGhlaWdodDogODBweDtcblx0XHRcdGJ1dHRvbntcblx0XHRcdFx0cGFkZGluZy10b3A6IDJweDtcblx0XHRcdFx0dGV4dC10cmFuc2Zvcm0gOiBjYXBpdGFsaXplO1xuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdGZvbnQtc2l6ZSA6IDEycHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0IDogNjAwO1xuXHRcdFx0XHRjb2xvciA6ICRjb2xvci1kYXJrO1xuXHRcdFx0XHR3aWR0aCA6IDEyMHB4O1xuXHRcdFx0XHRoZWlnaHQ6IDI2cHg7XG5cdFx0XHRcdG1hcmdpbiA6IDhweCAwO1xuXHRcdFx0XHRiYWNrZ3JvdW5kIDogd2hpdGU7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXMgOiAxNXB4O1xuXHRcdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRcdGJveC1zaGFkb3cgOiAwIDAgMCAxcHggJGNvbG9yLWRhcms7XG5cdFx0XHRcdGN1cnNvciA6IHBvaW50ZXI7XG5cdFx0XHRcdCY6aG92ZXJ7XG5cdFx0XHRcdFx0YmFja2dyb3VuZCA6ICRjb2xvci1kYXJrO1xuXHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQucmlnaHR7XG5cdFx0cG9zaXRpb24gOiBhYnNvbHV0ZTtcblx0XHRyaWdodCA6IDA7XG5cdFx0d2lkdGggOiAxMzBweDtcblx0XHRoZWlnaHQ6IDMwMHB4O1xuXHRcdC5zdGF0c3tcblx0XHRcdHBvc2l0aW9uIDogcmVsYXRpdmU7XG5cdFx0XHRoZWlnaHQ6IDEwMHB4O1xuXHRcdFx0YmFja2dyb3VuZCA6ICMwMGE2ZmY7XG5cdFx0XHRib3gtc2hhZG93IDogMCAtMXB4IHdoaXRlO1xuXHRcdFx0Y3Vyc29yIDogcG9pbnRlcjtcblx0XHRcdCY6Zmlyc3QtY2hpbGR7XG5cdFx0XHRcdGJveC1zaGFkb3cgOiBub25lO1xuXHRcdFx0fVxuXHRcdFx0Jjpob3Zlcntcblx0XHRcdFx0YmFja2dyb3VuZCA6ICRjb2xvcjtcblx0XHRcdH1cblx0XHRcdHNwYW57XG5cdFx0XHRcdCYuYmlne1xuXHRcdFx0XHRcdHRvcDogMzBweDtcblx0XHRcdFx0fVxuXHRcdFx0XHQmLnNtYWxse1xuXHRcdFx0XHRcdHRvcDogNTBweDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5zcGFue1xuXHRwb3NpdGlvbiA6IGFic29sdXRlO1xuXHRsZWZ0OiAwO1xuXHR3aWR0aDogMTAwJTtcblx0dGV4dC10cmFuc2Zvcm0gOiBjYXBpdGFsaXplO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdCYuYmlne1xuXHRcdGZvbnQtc2l6ZSA6IDE4cHg7XG5cdFx0Zm9udC13ZWlnaHQgOiA2MDA7XG5cdH1cblx0Ji5zbWFsbHtcblx0XHRmb250LXNpemUgOiAxMnB4O1xuXHRcdGZvbnQtd2VpZ2h0IDogMzAwO1xuXHR9XG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjcwMCw2MDAsMzAwXCIpO1xuLmZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogNDAwcHg7XG4gIG1hcmdpbi10b3A6IC0yMDBweDtcbiAgbWFyZ2luLWxlZnQ6IC0yMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3gtc2hhZG93OiA0cHggOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gbGVmdCwgIzAwYTZmZiwgIzYzYzMzYik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTI1JSAxMjUlO1xuICBjb2xvcjogIzJkNjEyMDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbi5jZW50ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uY2FyZCB7XG4gIHdpZHRoOiAzMjBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDRweCA4cHggMTZweCAwICMxYjNiMTQ7XG59XG4uY2FyZCAubGVmdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDE5MHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmNhcmQgLmxlZnQgLmF2YXRhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNjBweDtcbiAgdG9wOiAzMnB4O1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogI2JlZTZiNDtcbn1cbi5jYXJkIC5sZWZ0IC5hdmF0YXIgLmNpcmNsZSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMS41cyBlYXNlLWluLW91dDtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG59XG4uY2FyZCAubGVmdCAuYXZhdGFyIC5jaXJjbGU6Zmlyc3QtY2hpbGQge1xuICBsZWZ0OiAtM3B4O1xuICB0b3A6IC0zcHg7XG4gIHdpZHRoOiA3NnB4O1xuICBoZWlnaHQ6IDc2cHg7XG4gIGJvcmRlci1jb2xvcjogIzJkNjEyMCAjMmQ2MTIwICMyZDYxMjAgdHJhbnNwYXJlbnQ7XG59XG4uY2FyZCAubGVmdCAuYXZhdGFyIC5jaXJjbGU6bnRoLWNoaWxkKDIpIHtcbiAgbGVmdDogLTZweDtcbiAgdG9wOiAtNnB4O1xuICB3aWR0aDogODJweDtcbiAgaGVpZ2h0OiA4MnB4O1xuICBib3JkZXItY29sb3I6ICMyZDYxMjAgdHJhbnNwYXJlbnQgIzJkNjEyMCAjMmQ2MTIwO1xufVxuLmNhcmQgLmxlZnQgLmF2YXRhcjpob3ZlciAuY2lyY2xlOmZpcnN0LWNoaWxkIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbn1cbi5jYXJkIC5sZWZ0IC5hdmF0YXI6aG92ZXIgLmNpcmNsZTpudGgtY2hpbGQoMikge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcbn1cbi5jYXJkIC5sZWZ0IC5hdmF0YXIgaW1nIHtcbiAgd2lkdGg6IGluaGVyaXQ7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG59XG4uY2FyZCAubGVmdCAuaW5mbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0b3A6IDEyMnB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5jYXJkIC5sZWZ0IC5pbmZvIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5jYXJkIC5sZWZ0IC5pbmZvIHNwYW4uc21hbGwge1xuICB0b3A6IDIycHg7XG59XG4uY2FyZCAubGVmdCAuYnV0dG9ucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3R0b206IDMycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwcHg7XG59XG4uY2FyZCAubGVmdCAuYnV0dG9ucyBidXR0b24ge1xuICBwYWRkaW5nLXRvcDogMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMmQ2MTIwO1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMjZweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICMyZDYxMjA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jYXJkIC5sZWZ0IC5idXR0b25zIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMyZDYxMjA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jYXJkIC5yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMzBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbn1cbi5jYXJkIC5yaWdodCAuc3RhdHMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQ6ICMwMGE2ZmY7XG4gIGJveC1zaGFkb3c6IDAgLTFweCB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNhcmQgLnJpZ2h0IC5zdGF0czpmaXJzdC1jaGlsZCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uY2FyZCAucmlnaHQgLnN0YXRzOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2JlZTZiNDtcbn1cbi5jYXJkIC5yaWdodCAuc3RhdHMgc3Bhbi5iaWcge1xuICB0b3A6IDMwcHg7XG59XG4uY2FyZCAucmlnaHQgLnN0YXRzIHNwYW4uc21hbGwge1xuICB0b3A6IDUwcHg7XG59XG5cbnNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuc3Bhbi5iaWcge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5zcGFuLnNtYWxsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login-my-shg/login-my-shg.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/login/login-my-shg/login-my-shg.component.ts ***!
  \**************************************************************/
/*! exports provided: LoginMyShgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginMyShgComponent", function() { return LoginMyShgComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/auth.service */ "./src/shared/auth.service.ts");
/* harmony import */ var src_shared_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/manager.service */ "./src/shared/manager.service.ts");
/* harmony import */ var src_shared_mentor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/mentor.service */ "./src/shared/mentor.service.ts");
/* harmony import */ var src_shared_shg_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/shg.service */ "./src/shared/shg.service.ts");






let LoginMyShgComponent = class LoginMyShgComponent {
    constructor(managerService, shgService, mentorService, authService) {
        this.managerService = managerService;
        this.shgService = shgService;
        this.mentorService = mentorService;
        this.authService = authService;
    }
    ngOnInit() {
        this.authService.partOfSHG.next(true);
        this.user = JSON.parse(localStorage.getItem('User'));
        console.log(this.user);
        this.shgService.getSHG(this.user.shg)
            .subscribe((res) => {
            console.log(res);
            this.shg = res['shg'];
            this.mentorService.getMentor(this.shg.mentor)
                .subscribe((res1) => {
                console.log(res1);
                this.mentor = res1['mentor'];
            });
            this.managerService.getManager(this.shg.manager)
                .subscribe((res1) => {
                console.log(res1);
                this.manager = res1['manager'];
            });
        });
    }
};
LoginMyShgComponent.ctorParameters = () => [
    { type: src_shared_manager_service__WEBPACK_IMPORTED_MODULE_3__["ManagerService"] },
    { type: src_shared_shg_service__WEBPACK_IMPORTED_MODULE_5__["ShgService"] },
    { type: src_shared_mentor_service__WEBPACK_IMPORTED_MODULE_4__["MentorService"] },
    { type: src_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
LoginMyShgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-my-shg',
        template: __webpack_require__(/*! raw-loader!./login-my-shg.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login-my-shg/login-my-shg.component.html"),
        styles: [__webpack_require__(/*! ./login-my-shg.component.scss */ "./src/app/login/login-my-shg/login-my-shg.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_shared_manager_service__WEBPACK_IMPORTED_MODULE_3__["ManagerService"],
        src_shared_shg_service__WEBPACK_IMPORTED_MODULE_5__["ShgService"],
        src_shared_mentor_service__WEBPACK_IMPORTED_MODULE_4__["MentorService"],
        src_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], LoginMyShgComponent);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n  margin: 20px auto;\n  width: 100%;\n}\n\ninput.btn.btn-lg,\ninput.btn.btn-lg:focus {\n  outline: #39b3d7;\n  width: 60%;\n  height: 60px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\nbutton.btn {\n  width: 40%;\n  height: 60px;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NodWJoYW0vUHJvamVjdHMvaXRzLWEtdHJhcC9wdWJsaWMvc3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxpQkFBQTtFQUNBLFdBQUE7QUNBSjs7QURFRTs7RUFFRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtBQ0NKOztBRENFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmlucHV0LWdyb3VwIHtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBpbnB1dC5idG4uYnRuLWxnLFxuICBpbnB1dC5idG4uYnRuLWxnOmZvY3VzIHtcbiAgICBvdXRsaW5lOiAjMzliM2Q3O1xuICAgIHdpZHRoOiA2MCU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICB9XG4gIGJ1dHRvbi5idG4ge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgfVxuICBcbiAgIiwiLmlucHV0LWdyb3VwIHtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pbnB1dC5idG4uYnRuLWxnLFxuaW5wdXQuYnRuLmJ0bi1sZzpmb2N1cyB7XG4gIG91dGxpbmU6ICMzOWIzZDc7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogNjBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xufVxuXG5idXR0b24uYnRuIHtcbiAgd2lkdGg6IDQwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");
/* harmony import */ var src_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/auth.service */ "./src/shared/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






let LoginComponent = class LoginComponent {
    constructor(ngxService, authService, _location, router) {
        this.ngxService = ngxService;
        this.authService = authService;
        this._location = _location;
        this.router = router;
    }
    ngOnInit() {
        this.ngxService.start(); // start foreground loading with 'default' id
        // Stop the foreground loading after 5s
        setTimeout(() => {
            this.ngxService.stop(); // stop foreground loading with 'default' id
        }, 500);
    }
    loginUser() {
        const _loginData = {
            email: this.email,
            password: this.password
        };
        this.authService.loginUser(_loginData)
            .subscribe((res) => {
            this.authService.loggedUser.next("user");
            console.log('Logged In', res);
            localStorage.setItem('User', JSON.stringify(res['user']));
            localStorage.setItem('Token', JSON.stringify(res['token']));
            if (res['user']['shg']) {
                //is in shg
                this.authService.partOfSHG.next(true);
                this.router.navigate(['user', 'my-shg']);
            }
            else {
                this.authService.partOfSHG.next(false);
                this.router.navigate(['user', 'join-shg']);
            }
        }, (err) => {
            console.log('Error fetched', err);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__["NgxUiLoaderService"] },
    { type: src_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__["NgxUiLoaderService"],
        src_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/manager/manager-dashboard/manager-dashboard.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/manager/manager-dashboard/manager-dashboard.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZXIvbWFuYWdlci1kYXNoYm9hcmQvbWFuYWdlci1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/manager/manager-dashboard/manager-dashboard.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/manager/manager-dashboard/manager-dashboard.component.ts ***!
  \**************************************************************************/
/*! exports provided: ManagerDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerDashboardComponent", function() { return ManagerDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_shared_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/manager.service */ "./src/shared/manager.service.ts");
/* harmony import */ var src_shared_mentor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/mentor.service */ "./src/shared/mentor.service.ts");
/* harmony import */ var src_shared_shg_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/shg.service */ "./src/shared/shg.service.ts");





let ManagerDashboardComponent = class ManagerDashboardComponent {
    constructor(managerService, shgService, mentorService) {
        this.managerService = managerService;
        this.shgService = shgService;
        this.mentorService = mentorService;
        this.mentor_shg = new Array();
    }
    ngOnInit() {
        this.manager = JSON.parse(localStorage.getItem('Manager'));
        console.log("MANAGER DATA:-");
        console.log(this.manager);
        this.getMentors();
        // MANAGER DATA HAS ATTRIBUTE mentors WHICH IS ARRAY OF ALL THE MENTOR'S ID UNDER THIS LOGGED IN MANAGER.
        // ITERATE OVER ALL THE MENTOR IDS
        // GET DATA OF THE MENTOR USING HIS ID
        // IF THAT DATA HAS shg VALUE, THEN USE THAT TO GET DATA OF THE SHG CONTROLLED BY THIS MENTOR
        // ATTACH THIS TUPLE WITH THE <a> LINK SO THAT THIS DATA CAN BE SENT TO THE manager-mentor_shg COMPONENT 
        // FOR MENTORS /data/mentor/get-mentor
        // FOR SHG /data/shg/get-shg
        // STORE THIS DATA IN THE FOLLOWING FORMAT
        /*
              {
                  mentor  :   mentor data,
                  shg     :   shg data
              }

        */
    }
    getMentors() {
        if (this.manager.hasOwnProperty('mentors')) {
            if (this.manager.mentors.length > 0) {
                for (var i = 0; i < this.manager.mentors.length; i++) {
                    console.log("calling " + this.manager.mentors);
                    this.mentorService.getMentor(this.manager.mentors[i])
                        .subscribe((res) => {
                        const shg_id = res['mentor']['shg'];
                        if (shg_id) {
                            this.shgService.getSHG(shg_id)
                                .subscribe((resp) => {
                                this.mentor_shg.push({
                                    'mentor': res['mentor'],
                                    'shg': resp['shg']
                                });
                            });
                        }
                        else {
                            this.mentor_shg.push({
                                'mentor': res['mentor'],
                                'shg': null
                            });
                        }
                    });
                }
            }
        }
        // this.managerService.getMentor()
    }
};
ManagerDashboardComponent.ctorParameters = () => [
    { type: src_shared_manager_service__WEBPACK_IMPORTED_MODULE_2__["ManagerService"] },
    { type: src_shared_shg_service__WEBPACK_IMPORTED_MODULE_4__["ShgService"] },
    { type: src_shared_mentor_service__WEBPACK_IMPORTED_MODULE_3__["MentorService"] }
];
ManagerDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manager-dashboard',
        template: __webpack_require__(/*! raw-loader!./manager-dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/manager/manager-dashboard/manager-dashboard.component.html"),
        styles: [__webpack_require__(/*! ./manager-dashboard.component.scss */ "./src/app/manager/manager-dashboard/manager-dashboard.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_shared_manager_service__WEBPACK_IMPORTED_MODULE_2__["ManagerService"],
        src_shared_shg_service__WEBPACK_IMPORTED_MODULE_4__["ShgService"],
        src_shared_mentor_service__WEBPACK_IMPORTED_MODULE_3__["MentorService"]])
], ManagerDashboardComponent);



/***/ }),

/***/ "./src/app/manager/manager-login/manager-login.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/manager/manager-login/manager-login.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n  margin: 20px auto;\n  width: 100%;\n}\n\ninput.btn.btn-lg,\ninput.btn.btn-lg:focus {\n  outline: #39b3d7;\n  width: 60%;\n  height: 60px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\nbutton.btn {\n  width: 40%;\n  height: 60px;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NodWJoYW0vUHJvamVjdHMvaXRzLWEtdHJhcC9wdWJsaWMvc3JjL2FwcC9tYW5hZ2VyL21hbmFnZXItbG9naW4vbWFuYWdlci1sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFuYWdlci9tYW5hZ2VyLWxvZ2luL21hbmFnZXItbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxpQkFBQTtFQUNBLFdBQUE7QUNBSjs7QURFRTs7RUFFRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtBQ0NKOztBRENFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9tYW5hZ2VyL21hbmFnZXItbG9naW4vbWFuYWdlci1sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmlucHV0LWdyb3VwIHtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBpbnB1dC5idG4uYnRuLWxnLFxuICBpbnB1dC5idG4uYnRuLWxnOmZvY3VzIHtcbiAgICBvdXRsaW5lOiAjMzliM2Q3O1xuICAgIHdpZHRoOiA2MCU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICB9XG4gIGJ1dHRvbi5idG4ge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgfVxuICBcbiAgIiwiLmlucHV0LWdyb3VwIHtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pbnB1dC5idG4uYnRuLWxnLFxuaW5wdXQuYnRuLmJ0bi1sZzpmb2N1cyB7XG4gIG91dGxpbmU6ICMzOWIzZDc7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogNjBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xufVxuXG5idXR0b24uYnRuIHtcbiAgd2lkdGg6IDQwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/manager/manager-login/manager-login.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/manager/manager-login/manager-login.component.ts ***!
  \******************************************************************/
/*! exports provided: ManagerLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerLoginComponent", function() { return ManagerLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/auth.service */ "./src/shared/auth.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let ManagerLoginComponent = class ManagerLoginComponent {
    constructor(authService, _location, ngxService, router) {
        this.authService = authService;
        this._location = _location;
        this.ngxService = ngxService;
        this.router = router;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.ngxService.start(); // start foreground loading with 'default' id
            // Stop the foreground loading after 5s
            setTimeout(() => {
                this.ngxService.stop(); // stop foreground loading with 'default' id
            }, 500);
            if (!localStorage.getItem('Manager')) {
                const { value: password } = yield sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    title: 'Enter Global Password',
                    input: 'password',
                    inputPlaceholder: 'Enter your password',
                    inputAttributes: {
                        autocapitalize: 'off',
                        autocorrect: 'off'
                    }
                });
                if (password === '123') {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                        title: 'Welcome, please login!',
                        type: 'success'
                    });
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                        title: 'Wrong Password!',
                        text: 'Redirecting you back to the previous location',
                        type: 'error'
                    }).then(() => {
                        this._location.back();
                    });
                }
            }
        });
    }
    loginManager() {
        const _loginData = {
            email: this.email,
            password: this.password
        };
        this.authService.loginManager(_loginData)
            .subscribe((res) => {
            console.log('Manager Logged In', res);
            this.authService.loggedUser.next("manager");
            localStorage.setItem('Manager', JSON.stringify(res['manager']));
            localStorage.setItem('Token', JSON.stringify(res['token']));
            this.router.navigate(['manager', 'dashboard']);
        }, (err) => {
            console.log('Error fetched', err);
        });
    }
};
ManagerLoginComponent.ctorParameters = () => [
    { type: src_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_5__["NgxUiLoaderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
ManagerLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manager-login',
        template: __webpack_require__(/*! raw-loader!./manager-login.component.html */ "./node_modules/raw-loader/index.js!./src/app/manager/manager-login/manager-login.component.html"),
        styles: [__webpack_require__(/*! ./manager-login.component.scss */ "./src/app/manager/manager-login/manager-login.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_5__["NgxUiLoaderService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], ManagerLoginComponent);



/***/ }),

/***/ "./src/app/manager/manager-mentor-shg-detail/manager-mentor-shg-detail.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/manager/manager-mentor-shg-detail/manager-mentor-shg-detail.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZXIvbWFuYWdlci1tZW50b3Itc2hnLWRldGFpbC9tYW5hZ2VyLW1lbnRvci1zaGctZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/manager/manager-mentor-shg-detail/manager-mentor-shg-detail.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/manager/manager-mentor-shg-detail/manager-mentor-shg-detail.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ManagerMentorShgDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerMentorShgDetailComponent", function() { return ManagerMentorShgDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_shared_mentor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/mentor.service */ "./src/shared/mentor.service.ts");
/* harmony import */ var src_shared_shg_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/shg.service */ "./src/shared/shg.service.ts");





let ManagerMentorShgDetailComponent = class ManagerMentorShgDetailComponent {
    constructor(activatedRoute, shgService, mentorService) {
        this.activatedRoute = activatedRoute;
        this.shgService = shgService;
        this.mentorService = mentorService;
        this.mentor_id = this.activatedRoute.snapshot.paramMap['params']['id'];
        console.log(this.mentor_id);
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.mentorService.getMentor(this.mentor_id)
                .subscribe((res) => {
                const shg_id = res['mentor']['shg'];
                if (shg_id) {
                    this.shgService.getSHG(shg_id)
                        .subscribe((resp) => {
                        this.mentor = res['mentor'];
                        this.shg = resp['shg'];
                        console.log("DATA HERE", res['mentor'], resp['shg']);
                    });
                }
                else {
                    this.mentor = res['mentor'];
                    this.shg = null;
                }
            });
        });
    }
};
ManagerMentorShgDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_shared_shg_service__WEBPACK_IMPORTED_MODULE_4__["ShgService"] },
    { type: src_shared_mentor_service__WEBPACK_IMPORTED_MODULE_3__["MentorService"] }
];
ManagerMentorShgDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manager-mentor-shg-detail',
        template: __webpack_require__(/*! raw-loader!./manager-mentor-shg-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/manager/manager-mentor-shg-detail/manager-mentor-shg-detail.component.html"),
        styles: [__webpack_require__(/*! ./manager-mentor-shg-detail.component.scss */ "./src/app/manager/manager-mentor-shg-detail/manager-mentor-shg-detail.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_shared_shg_service__WEBPACK_IMPORTED_MODULE_4__["ShgService"],
        src_shared_mentor_service__WEBPACK_IMPORTED_MODULE_3__["MentorService"]])
], ManagerMentorShgDetailComponent);



/***/ }),

/***/ "./src/app/manager/manager-pending-mentors/manager-pending-mentors.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/manager/manager-pending-mentors/manager-pending-mentors.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZXIvbWFuYWdlci1wZW5kaW5nLW1lbnRvcnMvbWFuYWdlci1wZW5kaW5nLW1lbnRvcnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/manager/manager-pending-mentors/manager-pending-mentors.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/manager/manager-pending-mentors/manager-pending-mentors.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ManagerPendingMentorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerPendingMentorsComponent", function() { return ManagerPendingMentorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_shared_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/manager.service */ "./src/shared/manager.service.ts");
/* harmony import */ var src_shared_mentor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/mentor.service */ "./src/shared/mentor.service.ts");
/* harmony import */ var src_shared_shg_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/shg.service */ "./src/shared/shg.service.ts");





let ManagerPendingMentorsComponent = class ManagerPendingMentorsComponent {
    constructor(managerService, mentorService, shg) {
        this.managerService = managerService;
        this.mentorService = mentorService;
        this.shg = shg;
        this.pending_mentors = new Array();
    }
    ngOnInit() {
        this.manager = JSON.parse(localStorage.getItem('Manager'));
        console.log(this.manager);
        this.getPendingMentors();
    }
    getPendingMentors() {
        if (this.manager.hasOwnProperty('pending_mentors')) {
            if (this.manager.pending_mentors.length > 0) {
                for (var i = 0; i < this.manager.pending_mentors.length; i++) {
                    this.mentorService.getMentor(this.manager.pending_mentors[i])
                        .subscribe((res) => {
                        console.log('Mentor found', res);
                        this.pending_mentors.push(res['mentor']);
                    });
                }
            }
        }
    }
    acceptMentor(mentor_id) {
        console.log(mentor_id);
        this.managerService.acceptPendingManager(mentor_id, this.manager._id)
            .subscribe((res) => {
            console.log(res);
            this.mentorService.addManager(mentor_id, this.manager._id)
                .subscribe((resp) => {
                console.log(resp);
            });
        });
    }
};
ManagerPendingMentorsComponent.ctorParameters = () => [
    { type: src_shared_manager_service__WEBPACK_IMPORTED_MODULE_2__["ManagerService"] },
    { type: src_shared_mentor_service__WEBPACK_IMPORTED_MODULE_3__["MentorService"] },
    { type: src_shared_shg_service__WEBPACK_IMPORTED_MODULE_4__["ShgService"] }
];
ManagerPendingMentorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manager-pending-mentors',
        template: __webpack_require__(/*! raw-loader!./manager-pending-mentors.component.html */ "./node_modules/raw-loader/index.js!./src/app/manager/manager-pending-mentors/manager-pending-mentors.component.html"),
        styles: [__webpack_require__(/*! ./manager-pending-mentors.component.scss */ "./src/app/manager/manager-pending-mentors/manager-pending-mentors.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_shared_manager_service__WEBPACK_IMPORTED_MODULE_2__["ManagerService"],
        src_shared_mentor_service__WEBPACK_IMPORTED_MODULE_3__["MentorService"],
        src_shared_shg_service__WEBPACK_IMPORTED_MODULE_4__["ShgService"]])
], ManagerPendingMentorsComponent);



/***/ }),

/***/ "./src/app/manager/manager-pending-shgs/manager-pending-shgs.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/manager/manager-pending-shgs/manager-pending-shgs.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZXIvbWFuYWdlci1wZW5kaW5nLXNoZ3MvbWFuYWdlci1wZW5kaW5nLXNoZ3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/manager/manager-pending-shgs/manager-pending-shgs.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/manager/manager-pending-shgs/manager-pending-shgs.component.ts ***!
  \********************************************************************************/
/*! exports provided: ManagerPendingShgsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerPendingShgsComponent", function() { return ManagerPendingShgsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_shared_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/manager.service */ "./src/shared/manager.service.ts");



let ManagerPendingShgsComponent = class ManagerPendingShgsComponent {
    constructor(managerService) {
        this.managerService = managerService;
        this.pending_shgs = new Array();
    }
    ngOnInit() {
        this.mentor = JSON.parse(localStorage.getItem('Manager'));
        console.log(this.mentor);
    }
    getPendingSHG() {
        if (this.mentor.hasOwnProperty('pending_shgs')) {
            if (this.mentor.pending_shgs.length > 0) {
                for (var i = 0; i < this.mentor.pending_shgs; i++) {
                }
            }
        }
    }
};
ManagerPendingShgsComponent.ctorParameters = () => [
    { type: src_shared_manager_service__WEBPACK_IMPORTED_MODULE_2__["ManagerService"] }
];
ManagerPendingShgsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manager-pending-shgs',
        template: __webpack_require__(/*! raw-loader!./manager-pending-shgs.component.html */ "./node_modules/raw-loader/index.js!./src/app/manager/manager-pending-shgs/manager-pending-shgs.component.html"),
        styles: [__webpack_require__(/*! ./manager-pending-shgs.component.scss */ "./src/app/manager/manager-pending-shgs/manager-pending-shgs.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_shared_manager_service__WEBPACK_IMPORTED_MODULE_2__["ManagerService"]])
], ManagerPendingShgsComponent);



/***/ }),

/***/ "./src/app/manager/manager-signup/manager-signup.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/manager/manager-signup/manager-signup.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n  margin: 20px auto;\n  width: 100%;\n}\n\ninput.btn.btn-lg,\ninput.btn.btn-lg:focus {\n  outline: #39b3d7;\n  width: 60%;\n  height: 60px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\nbutton.btn {\n  width: 40%;\n  height: 60px;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NodWJoYW0vUHJvamVjdHMvaXRzLWEtdHJhcC9wdWJsaWMvc3JjL2FwcC9tYW5hZ2VyL21hbmFnZXItc2lnbnVwL21hbmFnZXItc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYW5hZ2VyL21hbmFnZXItc2lnbnVwL21hbmFnZXItc2lnbnVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0FDQUo7O0FERUU7O0VBRUUsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7QUNDSjs7QURDRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvbWFuYWdlci9tYW5hZ2VyLXNpZ251cC9tYW5hZ2VyLXNpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmlucHV0LWdyb3VwIHtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBpbnB1dC5idG4uYnRuLWxnLFxuICBpbnB1dC5idG4uYnRuLWxnOmZvY3VzIHtcbiAgICBvdXRsaW5lOiAjMzliM2Q3O1xuICAgIHdpZHRoOiA2MCU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICB9XG4gIGJ1dHRvbi5idG4ge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgfVxuICBcbiAgIiwiLmlucHV0LWdyb3VwIHtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pbnB1dC5idG4uYnRuLWxnLFxuaW5wdXQuYnRuLmJ0bi1sZzpmb2N1cyB7XG4gIG91dGxpbmU6ICMzOWIzZDc7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogNjBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xufVxuXG5idXR0b24uYnRuIHtcbiAgd2lkdGg6IDQwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/manager/manager-signup/manager-signup.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/manager/manager-signup/manager-signup.component.ts ***!
  \********************************************************************/
/*! exports provided: ManagerSignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerSignupComponent", function() { return ManagerSignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/auth.service */ "./src/shared/auth.service.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let ManagerSignupComponent = class ManagerSignupComponent {
    constructor(_location, authService, ngxService, router) {
        this._location = _location;
        this.authService = authService;
        this.ngxService = ngxService;
        this.router = router;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.ngxService.start(); // start foreground loading with 'default' id
            // Stop the foreground loading after 5s
            setTimeout(() => {
                this.ngxService.stop(); // stop foreground loading with 'default' id
            }, 500);
            const { value: password } = yield sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Enter Global Password',
                input: 'password',
                inputPlaceholder: 'Enter your password',
                inputAttributes: {
                    autocapitalize: 'off',
                    autocorrect: 'off'
                }
            });
            if (password === '123') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: 'Welcome, please sign up!',
                    type: 'success'
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: 'Wrong Password!',
                    text: 'Redirecting you back to the previous location',
                    type: 'error'
                }).then(() => {
                    this._location.back();
                });
            }
        });
    }
    signupManager() {
        const _signupData = {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            password: this.password,
            age: this.age,
            sex: this.sex,
            address: this.address,
            country: this.country,
            phone_number: this.phone_number,
            about: this.about
        };
        this.authService.signupManager(_signupData)
            .subscribe((res) => {
            console.log('Manager signed up', res);
            this.authService.loggedUser.next("manager");
            localStorage.setItem('Manager', JSON.stringify(res['manager']));
            localStorage.setItem('Token', JSON.stringify(res['token']));
            this.router.navigate(['manager', 'dashboard']);
        }, (err) => {
            console.log('Error', err);
        });
    }
};
ManagerSignupComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: src_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_5__["NgxUiLoaderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
ManagerSignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manager-signup',
        template: __webpack_require__(/*! raw-loader!./manager-signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/manager/manager-signup/manager-signup.component.html"),
        styles: [__webpack_require__(/*! ./manager-signup.component.scss */ "./src/app/manager/manager-signup/manager-signup.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], src_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        ngx_ui_loader__WEBPACK_IMPORTED_MODULE_5__["NgxUiLoaderService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], ManagerSignupComponent);



/***/ }),

/***/ "./src/app/manager/manager.component.scss":
/*!************************************************!*\
  !*** ./src/app/manager/manager.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZXIvbWFuYWdlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/manager/manager.component.ts":
/*!**********************************************!*\
  !*** ./src/app/manager/manager.component.ts ***!
  \**********************************************/
/*! exports provided: ManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerComponent", function() { return ManagerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ManagerComponent = class ManagerComponent {
    constructor() { }
    ngOnInit() {
    }
};
ManagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manager',
        template: __webpack_require__(/*! raw-loader!./manager.component.html */ "./node_modules/raw-loader/index.js!./src/app/manager/manager.component.html"),
        styles: [__webpack_require__(/*! ./manager.component.scss */ "./src/app/manager/manager.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ManagerComponent);



/***/ }),

/***/ "./src/app/mentor/mentor-apply-shg/mentor-apply-shg.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/mentor/mentor-apply-shg/mentor-apply-shg.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnRvci9tZW50b3ItYXBwbHktc2hnL21lbnRvci1hcHBseS1zaGcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/mentor/mentor-apply-shg/mentor-apply-shg.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/mentor/mentor-apply-shg/mentor-apply-shg.component.ts ***!
  \***********************************************************************/
/*! exports provided: MentorApplyShgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorApplyShgComponent", function() { return MentorApplyShgComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MentorApplyShgComponent = class MentorApplyShgComponent {
    constructor() { }
    ngOnInit() {
    }
};
MentorApplyShgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mentor-apply-shg',
        template: __webpack_require__(/*! raw-loader!./mentor-apply-shg.component.html */ "./node_modules/raw-loader/index.js!./src/app/mentor/mentor-apply-shg/mentor-apply-shg.component.html"),
        styles: [__webpack_require__(/*! ./mentor-apply-shg.component.scss */ "./src/app/mentor/mentor-apply-shg/mentor-apply-shg.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MentorApplyShgComponent);



/***/ }),

/***/ "./src/app/mentor/mentor-lms/mentor-lms.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/mentor/mentor-lms/mentor-lms.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnRvci9tZW50b3ItbG1zL21lbnRvci1sbXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/mentor/mentor-lms/mentor-lms.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/mentor/mentor-lms/mentor-lms.component.ts ***!
  \***********************************************************/
/*! exports provided: MentorLmsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorLmsComponent", function() { return MentorLmsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MentorLmsComponent = class MentorLmsComponent {
    constructor() { }
    ngOnInit() {
    }
};
MentorLmsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mentor-lms',
        template: __webpack_require__(/*! raw-loader!./mentor-lms.component.html */ "./node_modules/raw-loader/index.js!./src/app/mentor/mentor-lms/mentor-lms.component.html"),
        styles: [__webpack_require__(/*! ./mentor-lms.component.scss */ "./src/app/mentor/mentor-lms/mentor-lms.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MentorLmsComponent);



/***/ }),

/***/ "./src/app/mentor/mentor-login/mentor-login.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/mentor/mentor-login/mentor-login.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n  margin: 20px auto;\n  width: 100%;\n}\n\ninput.btn.btn-lg,\ninput.btn.btn-lg:focus {\n  outline: #39b3d7;\n  width: 60%;\n  height: 60px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\nbutton.btn {\n  width: 40%;\n  height: 60px;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NodWJoYW0vUHJvamVjdHMvaXRzLWEtdHJhcC9wdWJsaWMvc3JjL2FwcC9tZW50b3IvbWVudG9yLWxvZ2luL21lbnRvci1sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWVudG9yL21lbnRvci1sb2dpbi9tZW50b3ItbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxpQkFBQTtFQUNBLFdBQUE7QUNBSjs7QURFRTs7RUFFRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtBQ0NKOztBRENFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9tZW50b3IvbWVudG9yLWxvZ2luL21lbnRvci1sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmlucHV0LWdyb3VwIHtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBpbnB1dC5idG4uYnRuLWxnLFxuICBpbnB1dC5idG4uYnRuLWxnOmZvY3VzIHtcbiAgICBvdXRsaW5lOiAjMzliM2Q3O1xuICAgIHdpZHRoOiA2MCU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICB9XG4gIGJ1dHRvbi5idG4ge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgfVxuICBcbiAgIiwiLmlucHV0LWdyb3VwIHtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pbnB1dC5idG4uYnRuLWxnLFxuaW5wdXQuYnRuLmJ0bi1sZzpmb2N1cyB7XG4gIG91dGxpbmU6ICMzOWIzZDc7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogNjBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xufVxuXG5idXR0b24uYnRuIHtcbiAgd2lkdGg6IDQwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/mentor/mentor-login/mentor-login.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/mentor/mentor-login/mentor-login.component.ts ***!
  \***************************************************************/
/*! exports provided: MentorLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorLoginComponent", function() { return MentorLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/auth.service */ "./src/shared/auth.service.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");




let MentorLoginComponent = class MentorLoginComponent {
    constructor(authService, ngxService) {
        this.authService = authService;
        this.ngxService = ngxService;
    }
    ngOnInit() {
        this.ngxService.start(); // start foreground loading with 'default' id
        // Stop the foreground loading after 5s
        setTimeout(() => {
            this.ngxService.stop(); // stop foreground loading with 'default' id
        }, 500);
    }
    loginMentor() {
        const _loginData = {
            email: this.email,
            password: this.password
        };
        this.authService.loginMentor(_loginData)
            .subscribe((res) => {
            console.log('Mentor Logged In', res);
        }, (err) => {
            console.log('Error fetched', err);
        });
    }
};
MentorLoginComponent.ctorParameters = () => [
    { type: src_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderService"] }
];
MentorLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mentor-login',
        template: __webpack_require__(/*! raw-loader!./mentor-login.component.html */ "./node_modules/raw-loader/index.js!./src/app/mentor/mentor-login/mentor-login.component.html"),
        styles: [__webpack_require__(/*! ./mentor-login.component.scss */ "./src/app/mentor/mentor-login/mentor-login.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderService"]])
], MentorLoginComponent);



/***/ }),

/***/ "./src/app/mentor/mentor-my-shg/mentor-my-shg.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/mentor/mentor-my-shg/mentor-my-shg.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnRvci9tZW50b3ItbXktc2hnL21lbnRvci1teS1zaGcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/mentor/mentor-my-shg/mentor-my-shg.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/mentor/mentor-my-shg/mentor-my-shg.component.ts ***!
  \*****************************************************************/
/*! exports provided: MentorMyShgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorMyShgComponent", function() { return MentorMyShgComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MentorMyShgComponent = class MentorMyShgComponent {
    constructor() {
        this.SSGaccepted = false;
    }
    ngOnInit() {
        // GET mentor DATA FROM /data/mentor/get-mentor AND SUBSCRIBE IT
        // IF THE shg ATTRIBUTE IS NOT NULL:-
        // GET THE SHG DATA USING shg_id from /data/shg/get-shg
        // SET this.SSGaccepted = true
    }
};
MentorMyShgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mentor-my-shg',
        template: __webpack_require__(/*! raw-loader!./mentor-my-shg.component.html */ "./node_modules/raw-loader/index.js!./src/app/mentor/mentor-my-shg/mentor-my-shg.component.html"),
        styles: [__webpack_require__(/*! ./mentor-my-shg.component.scss */ "./src/app/mentor/mentor-my-shg/mentor-my-shg.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MentorMyShgComponent);



/***/ }),

/***/ "./src/app/mentor/mentor-signup/mentor-signup.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/mentor/mentor-signup/mentor-signup.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n  margin: 20px auto;\n  width: 100%;\n}\n\ninput.btn.btn-lg,\ninput.btn.btn-lg:focus {\n  outline: #39b3d7;\n  width: 60%;\n  height: 60px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\nbutton.btn {\n  width: 40%;\n  height: 60px;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NodWJoYW0vUHJvamVjdHMvaXRzLWEtdHJhcC9wdWJsaWMvc3JjL2FwcC9tZW50b3IvbWVudG9yLXNpZ251cC9tZW50b3Itc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tZW50b3IvbWVudG9yLXNpZ251cC9tZW50b3Itc2lnbnVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0FDQUo7O0FERUU7O0VBRUUsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7QUNDSjs7QURDRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvbWVudG9yL21lbnRvci1zaWdudXAvbWVudG9yLXNpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmlucHV0LWdyb3VwIHtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBpbnB1dC5idG4uYnRuLWxnLFxuICBpbnB1dC5idG4uYnRuLWxnOmZvY3VzIHtcbiAgICBvdXRsaW5lOiAjMzliM2Q3O1xuICAgIHdpZHRoOiA2MCU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICB9XG4gIGJ1dHRvbi5idG4ge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgfVxuICBcbiAgIiwiLmlucHV0LWdyb3VwIHtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pbnB1dC5idG4uYnRuLWxnLFxuaW5wdXQuYnRuLmJ0bi1sZzpmb2N1cyB7XG4gIG91dGxpbmU6ICMzOWIzZDc7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogNjBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xufVxuXG5idXR0b24uYnRuIHtcbiAgd2lkdGg6IDQwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/mentor/mentor-signup/mentor-signup.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/mentor/mentor-signup/mentor-signup.component.ts ***!
  \*****************************************************************/
/*! exports provided: MentorSignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorSignupComponent", function() { return MentorSignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/auth.service */ "./src/shared/auth.service.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");




let MentorSignupComponent = class MentorSignupComponent {
    constructor(authService, ngxService) {
        this.authService = authService;
        this.ngxService = ngxService;
    }
    ngOnInit() {
        this.ngxService.start(); // start foreground loading with 'default' id
        // Stop the foreground loading after 5s
        setTimeout(() => {
            this.ngxService.stop(); // stop foreground loading with 'default' id
        }, 500);
    }
    signupMentor() {
        const _signupData = {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            password: this.password,
            age: this.age,
            sex: this.sex,
            address: this.address,
            country: this.country,
            phone_number: this.phone_number,
            about: this.about
        };
        console.log(_signupData);
        this.authService.signupMentor(_signupData)
            .subscribe((res) => {
            console.log('Manager signed up', res);
        }, (err) => {
            console.log('Error', err);
        });
    }
};
MentorSignupComponent.ctorParameters = () => [
    { type: src_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderService"] }
];
MentorSignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mentor-signup',
        template: __webpack_require__(/*! raw-loader!./mentor-signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/mentor/mentor-signup/mentor-signup.component.html"),
        styles: [__webpack_require__(/*! ./mentor-signup.component.scss */ "./src/app/mentor/mentor-signup/mentor-signup.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderService"]])
], MentorSignupComponent);



/***/ }),

/***/ "./src/app/mentor/mentor.component.scss":
/*!**********************************************!*\
  !*** ./src/app/mentor/mentor.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnRvci9tZW50b3IuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/mentor/mentor.component.ts":
/*!********************************************!*\
  !*** ./src/app/mentor/mentor.component.ts ***!
  \********************************************/
/*! exports provided: MentorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorComponent", function() { return MentorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MentorComponent = class MentorComponent {
    constructor() { }
    ngOnInit() {
    }
};
MentorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mentor',
        template: __webpack_require__(/*! raw-loader!./mentor.component.html */ "./node_modules/raw-loader/index.js!./src/app/mentor/mentor.component.html"),
        styles: [__webpack_require__(/*! ./mentor.component.scss */ "./src/app/mentor/mentor.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MentorComponent);



/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Josefin+Sans);\n@import url(https://fonts.googleapis.com/css?family=Inder|Great+Vibes);\n/* container */\nnav {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n  position: relative;\n  background-color: #fff;\n  border-radius: 4px;\n  box-shadow: 0 3px 0 0 #ebebeb;\n}\nnav .nav-button {\n  display: none;\n  padding: 10px;\n  color: black;\n  background-color: #fff;\n  text-align: center;\n  font-size: 1.5em;\n  cursor: pointer;\n}\nnav .nav-button:hover {\n  color: black;\n}\n/* navigation */\n.nav {\n  display: inline-flex;\n  flex-direction: row;\n  justify-content: center;\n  background: #fff;\n  margin: 0 auto;\n  padding: 0 40px;\n  height: initial;\n  transition: height 0.3s ease;\n}\n.nav > li {\n  list-style: none;\n}\n.nav > li a {\n  display: block;\n  font-family: \"josefin sans\";\n  font-size: 20px;\n  font-weight: bold;\n  color: #28c3d4;\n  text-transform: uppercase;\n  text-decoration: none;\n  padding: 30px 15px;\n}\n.nav > li:hover > a {\n  color: black;\n}\n.nav > li:hover > .nav__sub {\n  display: flex;\n  flex-direction: column;\n}\n/* Sub navigation */\n.nav__sub {\n  display: none;\n  padding: 0;\n  margin: 0;\n  position: initial;\n}\n.nav__sub > li {\n  display: flex;\n  position: relative;\n}\n.nav__sub > li > a {\n  padding: 15px 60px;\n  font-size: 15px;\n  flex: 1 1 auto;\n}\n.nav__sub > li > a:hover {\n  color: black;\n}\n.button {\n  display: inline-block;\n  border-width: 1px;\n  border-style: solid;\n  border-color: transparent;\n  border-radius: 4px;\n  padding: 10px 15px;\n  background-color: #eee;\n  text-decoration: none;\n  color: #333;\n  transition: background-color 0.5s ease;\n}\n.button:hover, .button:active {\n  color: #fff;\n  background-color: #6f6f6f;\n  transition: background-color 0.5s ease;\n}\n.button--primary {\n  background-color: #fff;\n  color: #fff;\n}\n.button--primary:hover, .button--primary:active {\n  background-color: #e6e6e6;\n  color: #eee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NodWJoYW0vUHJvamVjdHMvaXRzLWEtdHJhcC9wdWJsaWMvc3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNVLGlFQUFBO0FBRUEsc0VBQUE7QUFrQlYsY0FBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBZks7RUFnQkwsa0JBQUE7RUFDQSw2QkFBQTtBQ2xCRjtBRG9CRTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQXZCRztFQXdCSCxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ2xCSjtBRG9CSTtFQUNFLFlBQUE7QUNsQk47QUR1QkEsZUFBQTtBQUNBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBdkNLO0VBd0NMLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FDcEJGO0FEc0JFO0VBQ0UsZ0JBQUE7QUNwQko7QURzQkk7RUFDRSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDcEJOO0FEdUJJO0VBR0UsWUFBQTtBQ3ZCTjtBRDBCSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ3hCTjtBRDZCQSxtQkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUMxQkY7QUQ2QkU7RUFDRyxhQUFBO0VBQ0Esa0JBQUE7QUMzQkw7QUQ2Qkk7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDM0JOO0FENkJNO0VBRUUsWUFBQTtBQzVCUjtBRDhGQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0NBQUE7QUMzRkY7QUQ0RkU7RUFFRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxzQ0FBQTtBQzNGSjtBRDhGRTtFQUNFLHNCQWhMRztFQWlMSCxXQUFBO0FDNUZKO0FEOEZJO0VBRUUseUJBQUE7RUFDQSxXQUFBO0FDN0ZOIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Sm9zZWZpbitTYW5zKTtcblxuICBAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9SW5kZXJ8R3JlYXQrVmliZXMpO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFZhcmlhYmxlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIGNvbG9yc1xuJGdyZWVuLXRvbWF0bzogIzI0NjYyQTtcbi8vJGJsdWU6IHJnYigwLCA5NSwgMjEzKTtcbi8vJGJsdWU6ICMyOGMzZDQ7XG4kYmx1ZTogI2ZmZjtcbiRibHVlLWRhcms6IGRhcmtlbigkYmx1ZSwgOCUpO1xuJHJvdHRlbi10b21hdG9lczogZGFya2VuKCRibHVlLCAxNSUpO1xuJGJhbm5lclBhZGRpbmc6IDQwcHg7XG4kYnV0dG9uRGVmYXVsdENvbG9yOiAjZWVlO1xuJGJ1dHRvblNtYWxsOiAxMHB4IDE1cHg7XG4kYnV0dG9uTWVkaXVtOiAxMHB4IDIwcHg7XG5cbi8qIGNvbnRhaW5lciAqL1xubmF2IHsgIFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCAzcHggMCAwICRibHVlLWRhcms7XG4gIFxuICAubmF2LWJ1dHRvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgfVxuICB9XG59XG5cbi8qIG5hdmlnYXRpb24gKi9cbi5uYXYge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICRibHVlO1xuICBtYXJnaW46IDAgYXV0byA7XG4gIHBhZGRpbmc6IDAgNDBweDtcbiAgaGVpZ2h0OiBpbml0aWFsO1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgLjNzIGVhc2U7XG5cbiAgPiBsaSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBcbiAgICBhIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrOyAgXG4gICAgICBmb250LWZhbWlseTogXCJqb3NlZmluIHNhbnNcIjtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgY29sb3I6ICMyOGMzZDQ7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgcGFkZGluZzogMzBweCAxNXB4O1xuICAgIH1cbiAgICAvLyBjaGFuZ2UgbGluayBjb2xvciBcbiAgICAmOmhvdmVyID4gYSB7XG4gICAgICAvL2JhY2tncm91bmQ6ICRibHVlLWRhcms7XG4gICAgICAvL2NvbG9yOiAjZjdmN2Y3O1xuICAgICAgY29sb3I6IGJsYWNrOyBcbiAgICB9XG4gICAgLy8gZGlzcGxheSBzdWJtZW51XG4gICAgJjpob3ZlciA+IC5uYXZfX3N1YiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gIH1cbn1cblxuLyogU3ViIG5hdmlnYXRpb24gKi9cbi5uYXZfX3N1YiB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IGluaXRpYWw7XG4gIC8vYmFja2dyb3VuZDogJGJsdWUtZGFyaztcbiAgXG4gID4gbGkge1xuICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgXG4gICAgPiBhIHtcbiAgICAgIHBhZGRpbmc6IDE1cHggNjBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgLy9iYWNrZ3JvdW5kOiAkcm90dGVuLXRvbWF0b2VzO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA5ODBweCkge1xuLy8gICAuYmFubmVyIHtcbi8vICAgICBwYWRkaW5nLXRvcDogMDtcbi8vICAgfVxuICBcbi8vICAgbmF2IHtcbi8vICAgICBib3JkZXItcmFkaXVzOiAwOyAgICBcbi8vICAgICAmLnZpc2libGUge1xuLy8gICAgICAgLm5hdiB7XG4vLyAgICAgICAgIGhlaWdodDogaW5pdGlhbDtcbi8vICAgICAgICAgb3ZlcmZsb3c6IGluaXRpYWw7XG4vLyAgICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAuM3MgZWFzZTtcbi8vICAgICAgICAgZmxleDogMSAxIGF1dG87XG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICAgIC5uYXYtYnV0dG9uIHtcbi8vICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuLy8gICAgICAgZmxleDogMSAxIGF1dG87XG4vLyAgICAgfVxuLy8gICB9XG4gIFxuLy8gICAubmF2IHtcbi8vICAgICBoZWlnaHQ6IDA7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbi8vICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgICAgcGFkZGluZzogMDtcbi8vICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbi8vICAgICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xuICAgIFxuLy8gICAgIGxpIHtcbi8vICAgICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgICAgJjpob3ZlciAubmF2X19zdWIge1xuLy8gICAgICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuLy8gICAgICAgfVxuLy8gICAgICAgYSB7XG4vLyAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH1cbiAgXG4vLyAgLm5hdl9fc3ViIHtcbi8vICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuLy8gICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuLy8gICAgIGZsZXgtd3JhcDogd3JhcDtcbi8vICAgICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xuLy8gICAgIHBvc2l0aW9uOiBpbml0aWFsO1xuICAgXG4vLyAgICAgbGkge1xuLy8gICAgICAgZmxleDogMCAxIGF1dG87XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi5idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzMzMztcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuNXMgZWFzZTtcbiAgJjpob3ZlcixcbiAgJjphY3RpdmUge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigjZWVlLCA1MCUpO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjVzIGVhc2U7XG4gIH1cbiAgXG4gICYtLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIFxuICAgICY6aG92ZXIsXG4gICAgJjphY3RpdmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRibHVlLCAxMCUpO1xuICAgICAgY29sb3I6ICNlZWU7XG4gICAgfVxuICB9XG59IiwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUpvc2VmaW4rU2Fucyk7XG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9SW5kZXJ8R3JlYXQrVmliZXMpO1xuLyogY29udGFpbmVyICovXG5uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDNweCAwIDAgI2ViZWJlYjtcbn1cbm5hdiAubmF2LWJ1dHRvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5uYXYgLm5hdi1idXR0b246aG92ZXIge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi8qIG5hdmlnYXRpb24gKi9cbi5uYXYge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIDQwcHg7XG4gIGhlaWdodDogaW5pdGlhbDtcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuM3MgZWFzZTtcbn1cbi5uYXYgPiBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ubmF2ID4gbGkgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LWZhbWlseTogXCJqb3NlZmluIHNhbnNcIjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMyOGMzZDQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZzogMzBweCAxNXB4O1xufVxuLm5hdiA+IGxpOmhvdmVyID4gYSB7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5uYXYgPiBsaTpob3ZlciA+IC5uYXZfX3N1YiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi8qIFN1YiBuYXZpZ2F0aW9uICovXG4ubmF2X19zdWIge1xuICBkaXNwbGF5OiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiBpbml0aWFsO1xufVxuLm5hdl9fc3ViID4gbGkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubmF2X19zdWIgPiBsaSA+IGEge1xuICBwYWRkaW5nOiAxNXB4IDYwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZmxleDogMSAxIGF1dG87XG59XG4ubmF2X19zdWIgPiBsaSA+IGE6aG92ZXIge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzMzMztcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2U7XG59XG4uYnV0dG9uOmhvdmVyLCAuYnV0dG9uOmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmY2ZjZmO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZTtcbn1cbi5idXR0b24tLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5idXR0b24tLXByaW1hcnk6aG92ZXIsIC5idXR0b24tLXByaW1hcnk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbiAgY29sb3I6ICNlZWU7XG59Il19 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/auth.service */ "./src/shared/auth.service.ts");



let NavbarComponent = class NavbarComponent {
    constructor(authService) {
        this.authService = authService;
        this.authService.loggedUser.subscribe((value) => {
            this.current_user = value;
        });
        this.authService.partOfSHG.subscribe((value) => {
            this.partOfSHG = value;
        });
        this.authService.hasCreatedSHG.subscribe((value) => {
            this.hasCreatedSHG = value;
        });
    }
    ngOnInit() {
        if (localStorage.getItem('Manager')) {
            this.current_user = 'manager';
        }
        else if (localStorage.getItem('User')) {
            this.current_user = 'user';
        }
        else if (localStorage.getItem('Mentor')) {
            this.current_user = 'mentor';
        }
        else {
            this.current_user = 'home';
        }
        console.log(this.current_user);
    }
    logOut() {
        this.authService.logOut();
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], NavbarComponent);



/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group {\n  margin: 20px auto;\n  width: 100%;\n}\n\ninput.btn.btn-lg,\ninput.btn.btn-lg:focus {\n  outline: #39b3d7;\n  width: 60%;\n  height: 60px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\nbutton.btn {\n  width: 40%;\n  height: 60px;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NodWJoYW0vUHJvamVjdHMvaXRzLWEtdHJhcC9wdWJsaWMvc3JjL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0FDQUo7O0FERUU7O0VBRUUsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7QUNDSjs7QURDRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmlucHV0LWdyb3VwIHtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBpbnB1dC5idG4uYnRuLWxnLFxuICBpbnB1dC5idG4uYnRuLWxnOmZvY3VzIHtcbiAgICBvdXRsaW5lOiAjMzliM2Q3O1xuICAgIHdpZHRoOiA2MCU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICB9XG4gIGJ1dHRvbi5idG4ge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgfVxuICBcbiAgIiwiLmlucHV0LWdyb3VwIHtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pbnB1dC5idG4uYnRuLWxnLFxuaW5wdXQuYnRuLmJ0bi1sZzpmb2N1cyB7XG4gIG91dGxpbmU6ICMzOWIzZDc7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogNjBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xufVxuXG5idXR0b24uYnRuIHtcbiAgd2lkdGg6IDQwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");
/* harmony import */ var src_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/auth.service */ "./src/shared/auth.service.ts");




let SignupComponent = class SignupComponent {
    constructor(ngxService, authService) {
        this.ngxService = ngxService;
        this.authService = authService;
    }
    /**
     * name
     * address
     * country
     * latitude
     * longitude
     * mentor_id
     * manager_id
     */
    ngOnInit() {
        this.ngxService.start(); // start foreground loading with 'default' id
        // Stop the foreground loading after 5s
        setTimeout(() => {
            this.ngxService.stop(); // stop foreground loading with 'default' id
        }, 500);
    }
    signupUser() {
        const _signupData = {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            password: this.password,
            age: this.age,
            sex: this.sex,
            address: this.address,
            country: this.country,
            phone_number: this.phone_number
        };
        this.authService.signupUser(_signupData)
            .subscribe((res) => {
            console.log('User signed up', res);
        }, (err) => {
            console.log('Error', err);
        });
    }
};
SignupComponent.ctorParameters = () => [
    { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__["NgxUiLoaderService"] },
    { type: src_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html"),
        styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/signup/signup.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__["NgxUiLoaderService"],
        src_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], SignupComponent);



/***/ }),

/***/ "./src/app/vegetation/vegetation.component.scss":
/*!******************************************************!*\
  !*** ./src/app/vegetation/vegetation.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlZ2V0YXRpb24vdmVnZXRhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/vegetation/vegetation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/vegetation/vegetation.component.ts ***!
  \****************************************************/
/*! exports provided: VegetationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VegetationComponent", function() { return VegetationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_shared_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/manager.service */ "./src/shared/manager.service.ts");



let VegetationComponent = class VegetationComponent {
    constructor(managerService) {
        this.managerService = managerService;
    }
    ngOnInit() {
    }
    predict() {
        console.log(this.state, this.district, this.month);
        this.managerService.getVegJSON()
            .subscribe((res) => {
            if (res['Haryana']) {
                if (res['Haryana'][`${this.district}`]) {
                    // if(res['Haryana'][`${this.district}`][`${this.month}`]){
                    this.output = res['Haryana'][`${this.district}`];
                    console.log(this.output['Jan']);
                    // }
                }
            }
        });
    }
};
VegetationComponent.ctorParameters = () => [
    { type: src_shared_manager_service__WEBPACK_IMPORTED_MODULE_2__["ManagerService"] }
];
VegetationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vegetation',
        template: __webpack_require__(/*! raw-loader!./vegetation.component.html */ "./node_modules/raw-loader/index.js!./src/app/vegetation/vegetation.component.html"),
        styles: [__webpack_require__(/*! ./vegetation.component.scss */ "./src/app/vegetation/vegetation.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_shared_manager_service__WEBPACK_IMPORTED_MODULE_2__["ManagerService"]])
], VegetationComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    BASE_URL: 'http://localhost:3000/',
    BASE_API_URL: 'http://localhost:3000/api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/shared/auth.service.ts":
/*!************************************!*\
  !*** ./src/shared/auth.service.ts ***!
  \************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__);





let AuthService = class AuthService {
    constructor(_http) {
        this._http = _http;
        this.BASE_API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_API_URL;
        this.loggedUser = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]("home");
        this.partOfSHG = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.hasCreatedSHG = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
    }
    signupUser(_signupData) {
        return this._http.post(this.BASE_API_URL + `/data/user/add-user`, _signupData);
    }
    signupMentor(_signupData) {
        return this._http.post(this.BASE_API_URL + `/data/mentor/add-mentor`, _signupData);
    }
    signupManager(_signupData) {
        return this._http.post(this.BASE_API_URL + `/data/manager/add-manager`, _signupData);
    }
    loginUser(_loginData) {
        // this.loggedUser.next("user");
        return this._http.post(this.BASE_API_URL + `/data/login-user`, _loginData);
    }
    // loginMentor(_loginData: any){
    //   // this.loggedUser.next("mentor");
    //   return this._http.post(this.BASE_API_URL + `/data/login-mentor`, _loginData);
    //   this.loggedUser.next("user");
    //   this.data = this._http.post(this.BASE_API_URL + `/data/login-user`, _loginData);
    //   if(!this.data.user.shg){
    //     this.partOfSHG.next(true);
    //   }
    //   return this.data;
    // }
    loginMentor(_loginData) {
        //this.loggedUser.next("mentor");
        this.data = this._http.post(this.BASE_API_URL + `/data/login-mentor`, _loginData);
        // if(this.data.mentor.has_applied){
        //   this.hasCreatedSHG.next(true);
        // }
        return this.data;
    }
    loginManager(_loginData) {
        // this.loggedUser.next("manager");
        return this._http.post(this.BASE_API_URL + `/data/login-manager`, _loginData);
    }
    logOut() {
        this.loggedUser.next("home");
        localStorage.clear();
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AuthService);



/***/ }),

/***/ "./src/shared/blockchain.service.ts":
/*!******************************************!*\
  !*** ./src/shared/blockchain.service.ts ***!
  \******************************************/
/*! exports provided: BlockchainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockchainService", function() { return BlockchainService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var savjeecoin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! savjeecoin */ "./node_modules/savjeecoin/src/blockchain.js");
/* harmony import */ var savjeecoin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(savjeecoin__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var elliptic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! elliptic */ "./node_modules/elliptic/lib/elliptic.js");
/* harmony import */ var elliptic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(elliptic__WEBPACK_IMPORTED_MODULE_3__);




let BlockchainService = class BlockchainService {
    constructor() {
        this.blockchainInstance = new savjeecoin__WEBPACK_IMPORTED_MODULE_2__["Blockchain"]();
        this.walletKeys = [];
        this.blockchainInstance.difficulty = 1;
        this.blockchainInstance.minePendingTransactions('hi');
        this.generateWalletKeys();
    }
    minePendingTransactions() {
        this.blockchainInstance.minePendingTransactions(this.walletKeys[0].publicKey);
    }
    addressIsFromCurrentUser(address) {
        return address === this.walletKeys[0].publicKey;
    }
    generateWalletKeys() {
        const ec = new elliptic__WEBPACK_IMPORTED_MODULE_3___default.a.ec('secp256k1');
        const key = ec.genKeyPair();
        this.walletKeys.push({
            keyObj: key,
            publicKey: key.getPublic('hex'),
            privateKey: key.getPrivate('hex'),
        });
        console.log(this.walletKeys);
    }
    getPendingTransactions() {
        return this.blockchainInstance.pendingTransactions;
    }
    addTransaction(tx) {
        this.blockchainInstance.addTransaction(tx);
    }
};
BlockchainService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BlockchainService);



/***/ }),

/***/ "./src/shared/manager.service.ts":
/*!***************************************!*\
  !*** ./src/shared/manager.service.ts ***!
  \***************************************/
/*! exports provided: ManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerService", function() { return ManagerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let ManagerService = class ManagerService {
    constructor(_http) {
        this._http = _http;
        this.BASE_API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_API_URL;
        this.getJSON().subscribe(data => {
            // console.log(data);
        });
    }
    getManager(manager_id) {
        const manager = {
            manager_id: manager_id
        };
        return this._http.post(this.BASE_API_URL + `/data/manager/get-manager`, manager);
    }
    getPendingSHG(shg_id) {
        const shg = {
            shg_id: shg_id
        };
        return this._http.post(this.BASE_API_URL + `/data/shg/get-shg`, shg);
    }
    acceptPendingManager(mentor_id, manager_id) {
        const mentor = {
            mentor_id: mentor_id,
            manager_id: manager_id
        };
        return this._http.post(this.BASE_API_URL + `/data/manager/approve-pending-mentor`, mentor);
    }
    addPendingSHG() {
    }
    getJSON() {
        return this._http.get('../assets/JSONs/crop.json');
    }
    getVegJSON() {
        return this._http.get('../assets/JSONs/deforestation.json');
    }
    getRainfallJSON() {
        return this._http.get('../assets/JSONs/rainfall.json');
    }
};
ManagerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ManagerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ManagerService);



/***/ }),

/***/ "./src/shared/mentor.service.ts":
/*!**************************************!*\
  !*** ./src/shared/mentor.service.ts ***!
  \**************************************/
/*! exports provided: MentorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorService", function() { return MentorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let MentorService = class MentorService {
    constructor(_http) {
        this._http = _http;
        this.BASE_API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_API_URL;
    }
    getMentor(mentor_id) {
        const mentor = {
            mentor_id: mentor_id
        };
        return this._http.post(this.BASE_API_URL + `/data/mentor/get-mentor`, mentor);
    }
    addManager(mentor_id, manager_id) {
        const comb = {
            mentor_id: mentor_id,
            manager_id: manager_id
        };
        return this._http.post(this.BASE_API_URL + `/data/mentor/add-manager`, comb);
    }
    addMentee(mentor_id, user_id) {
        const comb = {
            mentor_id: mentor_id,
            user_id: user_id
        };
        return this._http.post(this.BASE_API_URL + `/data/mentor/add-mentee`, comb);
    }
};
MentorService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MentorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], MentorService);



/***/ }),

/***/ "./src/shared/shg.service.ts":
/*!***********************************!*\
  !*** ./src/shared/shg.service.ts ***!
  \***********************************/
/*! exports provided: ShgService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShgService", function() { return ShgService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let ShgService = class ShgService {
    constructor(_http) {
        this._http = _http;
        this.BASE_API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_API_URL;
    }
    getSHG(shg_id) {
        const shg = {
            shg_id: shg_id
        };
        return this._http.post(this.BASE_API_URL + `/data/shg/get-shg`, shg);
    }
    getAllSHG() {
        return this._http.get(this.BASE_API_URL + `/data/shg/get-all-shgs`);
    }
    addMentee(shg_id, user_id) {
        const shg = {
            shg_id: shg_id,
            user_id: user_id
        };
        return this._http.post(this.BASE_API_URL + `/data/shg/add-mentee`, shg);
    }
};
ShgService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ShgService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ShgService);



/***/ }),

/***/ "./src/shared/user.service.ts":
/*!************************************!*\
  !*** ./src/shared/user.service.ts ***!
  \************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let UserService = class UserService {
    constructor(_http) {
        this._http = _http;
        this.BASE_API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_API_URL;
    }
    joinSHG(shg_id, user_id) {
        const comb = {
            shg_id: shg_id,
            user_id: user_id
        };
        return this._http.post(this.BASE_API_URL + `/data/user/join-shg`, comb);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], UserService);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/shubham/Projects/its-a-trap/public/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map