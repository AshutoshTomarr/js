const accountId = "as34"
let accountsState = "jaipur"
var accounts = 12

try {
    accountId = accountId + 2
} catch (error) {
    console.error(error)
}

console.log(accountId)

console.table([accountId, accountsState , accounts])


//var not used