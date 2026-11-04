function c(a,b){Colors.put(a, Color.valueOf(b))}; 
// colour codes
c("crtx","0050ff");
c("urog","4400ff");
c("nura","aaffff");
c("nh","ffffa0");
c("tac","dead00");
c("infra","00dead");
c("ypor","bbff00");

// gradient colour code(s);
Colors.put("rainbow", Color.valueOf("ffffffff"));
Timer.schedule(()=>{Colors.get("rainbow").fromHsv(Vars.state.tick, 1, 1)},0,0.01);

Colors.put("grayscaling", Color.valueOf("ffffffff"));
Timer.schedule(()=>{Colors.get("grayscaling").fromHsv(0, 0, (Mathf.sin(Mathf.degRad * 3 * Vars.state.tick)+1)/2 )},0,0.01);

// item colour test
let item = Items.copper;
Timer.schedule(()=>{item.color.fromHsv(Vars.state.tick, 1, 1)},0,0.01)
