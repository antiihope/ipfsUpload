import requests
def Upload_ipfs(path):
    # https://ipfs.infura.io/ipfs/QmP27uTAqpWtNMiP6e53qdfq2ekdRmxwE2UQKjgnRUudAs
    r = requests.post("https://ipfs.infura.io:5001/api/v0/add?stream-channels=true", files={"file": open(path, "rb")})
    res = r.json()
    res["url"] = "https://ipfs.infura.io/ipfs/" + res["Hash"]
    print(res)
    return res
    
    
