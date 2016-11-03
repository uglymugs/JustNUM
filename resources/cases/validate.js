if (this.caseRef.indexOf('/') !== -1) {
  error('caseRef', "Case ref cannot contain /");
}

dpd.cases.get({ caseRef: this.caseRef })
.then(function(caseList) {
    if (caseList && caseList.length > 0) {
        error('caseRef', 'Case ref already exists');
    }
})