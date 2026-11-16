var maxDistance = function(position, m) {
    position.sort((a,b)=>a-b);
    let low=1, high=position[position.length-1]-position[0],ans=0;
    while(low<=high){
        let mid= Math.floor(low+(high-low)/2);
        if(canPlace(position,m,mid)){
            ans=mid;
            low=mid+1;
        } else {
            high=mid-1;
        }
    }
    return ans;
};
var canPlace =function(pos,m,dist){
    let c=1, last=pos[0];
    for(let i=1; i<pos.length; i++){
        if(pos[i]-last>=dist){
            c++;
            last=pos[i];
        }
        if(c>=m) return true;
    }
    return false;
}