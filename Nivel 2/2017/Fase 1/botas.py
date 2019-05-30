n = int(input()) #Número de botas:

bota = []

for i in range(n):
    tam, pe = input().split() # Digite o tamanho e o pé:
    bota.append([int(tam), pe])

cnt = 0

for i in range(30, 60+1):
    cnt += min(bota.count([i,'E']),bota.count([i,'D']))

print(cnt)