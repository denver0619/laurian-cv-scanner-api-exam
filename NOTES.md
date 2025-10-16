# OPTIONAL TASKS

### Authentication

Since the system already uses firebase firestore I opted in using also firebase authentication to provide jwt tokens.

To test I did a following in Postman:

1.  Created a new POST request in the collection:
2.  Set the url to the following

```base64
aHR0cHM6Ly9pZGVudGl0eXRvb2xraXQuZ29vZ2xlYXBpcy5jb20vdjEvYWNjb3VudHM6c2lnbkluV2l0aFBhc3N3b3JkP2tleT1BSXphU3lBWkZIMzJfeFU0YVpfWW9COEZmVWlKTTZoWGVhb213eVk=
```

3. Set the body to:

```base64
eyJlbWFpbCI6ICJqZHJsYXVyaWFuQGdtYWlsLmNvbSIsICJwYXNzd29yZCI6Imhha2RvZzEyMzQ1IiwgInJldHVyblNlY3VyZVRva2VuIjogdHJ1ZX0=
```

4. Set the post-response script under Scripts tab to:

```base64
bGV0IGpzb25SZXNwb25zZSA9IHBtLnJlc3BvbnNlLmpzb24oKTsKbGV0IGlkVG9rZW4gPSBqc29uUmVzcG9uc2UuaWRUb2tlbjsKCnBtLmNvbGxlY3Rpb25WYXJpYWJsZXMuc2V0KCJmaXJlYmFzZV90b2tlbiIsIGlkVG9rZW4pCg==
```

5. Decode these values, I used this since it contains api keys for front end

Then after that for every request for keywords and scans

1. Click Authorization
2. Select Bearer Token from dropdown
3. For the token input field type the following1

```
{{firebase_token}}
```
