const out = function() {
    process.stdout.write(process.cwd());
    process.stdout.write('\nprompt > ')
}
module.exports = out;