function fac(n){
    f=1;
    if (n==0 && n==1)
    return 1;
    else
    for(i=1; i<=n; i++)
    f*=i;
    return f;
}
n=prompt("Entrer le nombre: ");
alert(fac(n));