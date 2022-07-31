let btn=document.getElementById('btn');
let output=document.getElementById('output');
let tips=
[
    "Piece your workout together. You do not need to get all your exercise at one time. Ten minutes morning, noon, and night can give much of the same benefit as 30 minutes all at once.","Exercise with a friend. Finding a workout partner can help keep you on track and motivate you to get out the door.","Keep it brisk. When you walk, make it brisk, since this may help control weight better than walking at a leisurely pace. What is brisk enough? Walk as though you are meeting someone for lunch and you are a little late.",
    "Move your feet before you eat. Hit the gym or go for a 20-minute walk with coworkers, and have lunch afterward.",
    "Turn off the TV, computer, and smart phone. Cutting back on screen time is a great way to curb your “sit time.” Move around instead, by visiting the gym or even cleaning the house.",
    "Turn sit time into fit time. Try to combine cardiovascular exercise with a sedentary activity that you already do. For example, try doing simple exercises while watching TV, or set a reminder at work to get up and walk a few minutes every hour.",
    "Plan exercise into your day. Set aside a specific time in your schedule to exercise and put it in your planner.",
     "Reward yourself. Set short-term goals—and reward yourself for achieving them. Try targeting a specific event, such as a road race or a walk-for-charity, to participate in—this can help keep you motivated.",
     "Get enough sleep. When you do not rest well, you compensate by eating more. Usually, it is junk food. Get enough rest and you do not need to snack to stay awake.",
     "Meditate. Meditation quietens your mind and calms your soul. ",
     "Pick exercises that you enjoy. When you enjoy a sport, you naturally want to do it. Exercise is not about suffering and pushing yourself; it is about being healthy and having fun at the same time.",
     "Work out different parts of your body. Do not just do cardio (like jogging). Give your body a proper workout. The easiest way is to engage in sports since they work out different muscle groups. ",
     "Cut down on processed food. Processed food is not good because (a) most of the nutritional value is lost in the creation of these foods, and (b) the added preservatives are bad for our health.",
     "Choose intact grains over refined grains. Intact grains contain all the essential parts of the grain seed; in other words, they contain 100% of the original kernel, which includes the bran, germ, and endosperm. ",
     "Love yourself. Self-love is a crucial part of living a healthy life. When you have a negative self-image, it naturally weighs down on your mental outlook and health.",
     "Walk/Run barefoot. There are many benefits of barefoot walking/running, from having a better posture to less stress for your feet and joints.",
     "Purge negative people from your life. Positive mental health is part of a healthy life. You do not need toxic people in your life. If you feel that a friend is overly critical or negative, let him/her go.",
     "Purge negativity from yourself. You do not need negativity from yourself either. Listen to the thoughts that come up and get rid of your negative thoughts. ",,
     "Avoid trigger foods. Trigger foods are the foods that make you go berserk and binge after you eat them.",
     "Breathe. Deeply. Oxygen is vital for life. ",
     "Eat small meals. Choose several small meals over huge meals as it evens out your energy distribution.",
     "Learn to say no. Do not eat just because you are out with friends or because other people offer you food. ",
     "Cut down on sugary food/drinks. Sugary food consists of your candy bars, pastries, chocolate, cookies, cakes, and jelly donuts.",
     "Bring a water bottle when you go out. That way, you can drink whenever you want. It saves you money and you do not need to resort to bad alternatives like soda.",
     "Eat what you need. It is better to eat less and in line with your energy needs, rather than eat excessively and work off excess calorie intake through exercise.",
     "Get regular checkups. Some diseases do not show up as symptoms until it is too late. Get regular blood tests for blood sugar, vitamins, and minerals, along with urine tests. ",
     "Practice good dental hygiene. Good dental hygiene make you a lot more desirable and it is linked to better health.",
     "Hang out with healthy people. You are the average of the 5 people you spend the most time with, so the more time you spend around healthy people, the better it is."


];

btn.addEventListener('click',function(){
    var randonTip=tips[Math.floor(Math.random()*quote.length)]
    output.innerHTML=randonQuote;
})