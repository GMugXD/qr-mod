function c(a,b){Colors.put(a, Color.valueOf(b))}; c("crtx","0050ff");
c("ypor","4400ff");
c("nura","aaffff");
c("nh","ffffa0");
c("tac","dead00");
c("infra","00dead");

c("rainbow","ffffffff");
Timer.schedule(()=>{Colors.get("rainbow").fromHsv(Vars.state.tick, 1, 1)},0,0.01);

let item = Items.copper;
Timer.schedule(()=>{item.color.fromHsv(Vars.state.tick, 1, 1)},0,0.01)
