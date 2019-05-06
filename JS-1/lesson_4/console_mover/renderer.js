let renderer = {
    map: '',
    render() {
        for(let row = 0; row < config.rowCount; row++) {
            for(let coll = 0; coll < config.collCount; coll++) {
                if(row === player.y && coll === player.x) {
                    this.map += 'x';
                } else {
                    this.map += '0';
                }
            }
            this.map += '\n';
        }
        console.log(this.map);
    },

    clear() {
        console.clear();
        this.map = '';
    }
};
