(function(){

    window.addEventListener('DOMContentLoaded', function(){

        var btn = document.querySelector('#closewin');
        btn.addEventListener('click', closeWin);
        

        function closeWin() {
            console.log('close win', window.name);
            window.close();
        }
    });
})();