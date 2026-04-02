from pathlib import Path
p=Path.cwd()/"src"/"App.tsx"
lines=p.read_text('utf-8').splitlines()
out=[]
i=0
while i<len(lines):
    if lines[i].strip()=='<<<<<<< HEAD':
        i+=1
        a=[]
        while i<len(lines) and lines[i].strip()!='=======':
            a.append(lines[i]); i+=1
        if i>=len(lines): raise SystemExit('no =======')
        i+=1
        b=[]
        while i<len(lines) and not lines[i].strip().startswith('>>>>>>>'):
            b.append(lines[i]); i+=1
        if i>=len(lines): raise SystemExit('no >>>>>>>')
        merged=[]
        for line in a+b:
            if line not in merged: merged.append(line)
        out.extend(merged)
        i+=1
    else:
        out.append(lines[i]); i+=1
p.write_text('\n'.join(out)+'\n','utf-8')
print('done')