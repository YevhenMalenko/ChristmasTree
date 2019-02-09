function tree(n) {
    var branch = 1;
    var width = (n - 1) * 2 + 1;
    for (var i = 1; i <= n; i++) {
        var array = Array(branch).fill('*');
        if (i%2 === 0) {
            array[Math.floor(Math.random() * (branch))] = 0;
        }
        if (i !== n) {
            for (var j = 1; j <= (width - branch) / 2; j++) {
                array.unshift('_');
                array.push('_');
            }
        }
        console.log(array.join(''));
        branch += 2;
    }
}
tree(4);
