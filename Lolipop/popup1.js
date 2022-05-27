$(function(){
    $('#name').keyup(function(){
        $('#greet').text($('#name').val())
    })
  })

  $(function () {
    //编写一个可以让图片自动循环滚动的函数(弄一个定时器，回调函数里设置它的marginLeft)
    var timer
    var offset = 0 //待会用这个变量设置它的marginLeft 
    function autoRun(){
        timer = setInterval(function () {
            offset -= 5 //这是marginLeft
            if(offset <= -360){
                //滚动了四张图片 接着滚动
                offset = 0
            }
            $("ul").css({
                marginLeft:offset
            })
        },131.4)
    }
    autoRun()//滚动起来
    //监听li的移入 移出事件
    $("li").hover(function () {
        //鼠标指针放上面 不让ta滚动(停掉这个定时器)
        clearInterval(timer)
        //鼠标指针没有放上面的图片 给他们一个黑色的背景 这样显得选中的这个亮
        $(this).siblings().fadeTo(120,0.33)
        //当前的这个图片亮
        $(this).fadeTo(120,1)
    },function () {
        autoRun() //滚动
        $("li").fadeTo(120,1) //1-->全亮
    })
})

