function ipv4Parser(ip, mask){
    let arr_ip = ip.split('.').map(Number);
    let arr_mask = mask.split('.').map(Number);
    let block = [];
    let host = [];
    for(let i = 0; i<arr_ip.length; i++){
        block.push(arr_ip[i] & arr_mask[i]);
        host.push(~arr_mask[i] & arr_ip[i]);
    }
    
    
return [block.join('.'), host.join('.')];
}
console.log(ipv4Parser('192.168.50.1'  , '255.255.255.0'));