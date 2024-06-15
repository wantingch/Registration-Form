export function successtemplate(info, count) {
    return `<h1>Thank you ${info.name} for registering. You have registered ${count} participants and owe $${info.fee} in Fees.</h1>`;
}
