var Wombat = function(opts) {
    console.log('Log option works');
    opts = opts || {};

    this.name = opts.name || 'Wally';

    this.eat = function(food) {
        if (!food) throw Error('D:');

        //This branche is not tested to fail branch threshold
        if (food == 'test') {
            return 'false';
        }

        return 'nom nom';
    }

    return this;
};