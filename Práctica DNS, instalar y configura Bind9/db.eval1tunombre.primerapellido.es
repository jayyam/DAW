$TTL	604800
@	IN	SOA	dns3.eval1tunombre.primerapellido.es. dnsmastersegundoapellidoeval1.eval1tunombre.primerapellido.es. (
			      2		; Serial
			 604800		; Refresh
			  86400		; Retry
			2419200		; Expire
			 604800 )	; Negative Cache TTL
;
@	IN	NS	dns3.eval1tunombre.primerapellido.es.
	IN	NS	dns1.eval1tunombre.primerapellido.es.
	IN	NS	dns4.eval1tunombre.primerapellido.es.
	
	IN	MX  40	atenea.eval1tunombre.primerapellido.es.
	IN	MX  80  apolo.eval1tunombre.primerapellido.es.
;
dns3	IN	A	172.31.10.3
dns1	IN	A	172.31.10.1
dns4	IN	A	172.31.10.4

p1	IN	A	172.31.0.54
p2	IN	A	172.31.0.55
p3	IN	A	172.31.0.56
apolo	IN	A	172.31.10.30
atenea	IN	A	172.31.10.31
poseidon IN	A	172.31.10.32
;
ftp	IN	CNAME	poseidon.eval1tunombre.primerapellido.es.
www	IN	CNAME	apolo.eval1tunombre.primerapellido.es.
;
