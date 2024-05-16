
$(document).ready(function(){
    // アコーディオンの動作を定義
    function toggleAccordion() {
        if ($(window).width() <= 768) {
            var $accordionList = $(this).next('.accordion_list');
            // アクティブなアコーディオン以外を閉じる
            $('.accordion_list').not($accordionList).find('.accordion').slideUp();
            $('.accordion_toggle').not($(this)).removeClass('active');
            // クリックされたアコーディオンのみをトグル
            $accordionList.find('.accordion').slideToggle();
            $(this).toggleClass('active');
        } else {
            // PCの場合はアコーディオンをすべて表示
            $('.accordion_list').find('.accordion').slideDown();
        }
    }
    
    // 初期状態でアコーディオンを閉じる(PCでは表示)
    $('.accordion_list').find('.accordion').slideUp();
    
    // クリック時の動作を定義
    $('.accordion_toggle').click(toggleAccordion);
    
    // ウィンドウのリサイズ時に動作を再評価
    $(window).resize(toggleAccordion);
    
    // 初期表示の動作を実行
    toggleAccordion();
    // トグルの動き
    $('.accordion_toggle').click(function(){
        $(this).find('.arrow').toggleClass('up');
    });

});



















